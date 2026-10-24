'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

const NUM_COLUMNS = 5;

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [shuttersOpen, setShuttersOpen] = useState(false);
  const [shuttersDone, setShuttersDone] = useState(false);
  const [videoFadeOut, setVideoFadeOut] = useState(false);
  const [displayPercent, setDisplayPercent] = useState(0);

  const videoRef = useRef(null);
  const targetPercentRef = useRef(0);
  const isCompletedRef = useRef(false);
  const isVideoReadyRef = useRef(false);

  const handleComplete = useCallback(() => {
    if (isCompletedRef.current) return;
    isCompletedRef.current = true;

    setVideoFadeOut(true);
    setTimeout(() => {
      setLoading(false);
      if (typeof window !== 'undefined') {
        window.__TXCO_PRELOADER_DONE = true;
        window.dispatchEvent(new CustomEvent('txco:preloader-done'));
      }
    }, 600);
  }, []);

  // 1. Blue Shutter animation & intro video auto-start
  useEffect(() => {
    const shutterTimer = setTimeout(() => {
      setShuttersOpen(true);
    }, 300);

    const shuttersDoneTimer = setTimeout(() => {
      setShuttersDone(true);
    }, 1250);

    const videoPlayTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => { });
      }
    }, 500);

    return () => {
      clearTimeout(shutterTimer);
      clearTimeout(shuttersDoneTimer);
      clearTimeout(videoPlayTimer);
    };
  }, []);

  // 2. Track Hero Video Loading Progress & Buffer (0% to 100%)
  useEffect(() => {
    const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';

    const checkHeroVideo = () => {
      if (!isHomePage) {
        // Non-homepage: progress to 100% smoothly
        targetPercentRef.current = 100;
        isVideoReadyRef.current = true;
        return;
      }

      const heroVideo = document.querySelector('.hero-video-bg');
      if (!heroVideo) {
        // Video element not rendered yet, initial connecting phase
        targetPercentRef.current = Math.max(targetPercentRef.current, 15);
        return;
      }

      // Check readyState
      // 0 = HAVE_NOTHING
      // 1 = HAVE_METADATA
      // 2 = HAVE_CURRENT_DATA
      // 3 = HAVE_FUTURE_DATA (can play next frame)
      // 4 = HAVE_ENOUGH_DATA (can play all the way through)
      const rState = heroVideo.readyState;
      let calculated = 15;

      if (rState === 1) {
        calculated = 30;
      } else if (rState === 2) {
        calculated = 50;
      } else if (rState === 3) {
        calculated = 85;
      } else if (rState >= 4) {
        calculated = 100;
        isVideoReadyRef.current = true;
      }

      // If duration is known and buffered ranges exist, factor in exact buffered fraction
      if (heroVideo.duration > 0 && heroVideo.buffered.length > 0) {
        const bufferedEnd = heroVideo.buffered.end(heroVideo.buffered.length - 1);
        const bufferRatio = Math.min(1, bufferedEnd / heroVideo.duration);
        const bufferPct = Math.round(25 + bufferRatio * 75);
        calculated = Math.max(calculated, bufferPct);

        if (bufferRatio >= 0.95 || (rState >= 3 && bufferRatio >= 0.4)) {
          calculated = 100;
          isVideoReadyRef.current = true;
        }
      }

      targetPercentRef.current = Math.max(targetPercentRef.current, calculated);
    };

    // Listen for explicit ready events
    const handleHeroReady = () => {
      targetPercentRef.current = 100;
      isVideoReadyRef.current = true;
    };

    window.addEventListener('txco:hero-video-ready', handleHeroReady);

    // Poll hero video status every 60ms
    const interval = setInterval(checkHeroVideo, 60);

    // Generous safety timer to prevent endless stall on bad connections (25s)
    const safetyTimer = setTimeout(() => {
      targetPercentRef.current = 100;
      isVideoReadyRef.current = true;
    }, 25000);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimer);
      window.removeEventListener('txco:hero-video-ready', handleHeroReady);
    };
  }, []);

  // 3. Smooth animation counter from current displayPercent towards targetPercent
  useEffect(() => {
    let animFrame;

    const updateDisplay = () => {
      setDisplayPercent((prev) => {
        const target = targetPercentRef.current;
        if (prev >= 100) {
          return 100;
        }

        if (prev < target) {
          // Smooth step increment
          const diff = target - prev;
          const step = Math.max(1, Math.ceil(diff * 0.12));
          const next = Math.min(target, prev + step);

          // If reached 100%, trigger completion after brief hold
          if (next >= 100) {
            setTimeout(() => {
              const heroVideo = document.querySelector('.hero-video-bg');
              if (heroVideo) {
                heroVideo.play().catch(() => { });
              }
              handleComplete();
            }, 300);
          }

          return next;
        }

        return prev;
      });

      animFrame = requestAnimationFrame(updateDisplay);
    };

    animFrame = requestAnimationFrame(updateDisplay);

    return () => {
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, [handleComplete]);

  if (!loading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#ffffff',
        opacity: videoFadeOut ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: videoFadeOut ? 'none' : 'all',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* 1. INTRO VIDEO LAYER WITH LOADING ANIMATION (0 - 100%) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          zIndex: 1,
          padding: '1.5rem',
        }}
      >
        {/* Intro Logo Video (Loops continuously while video loads) */}
        <video
          ref={videoRef}
          src="/images/logo/txco-intro.mp4"
          muted
          playsInline
          loop
          autoPlay
          style={{
            width: '50%',
            maxWidth: '460px',
            maxHeight: '45vh',
            objectFit: 'contain',
            backgroundColor: '#ffffff',
          }}
        />

        {/* Loading Progress Bar & Percentage Under the Gif / Video */}
        <div
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.65rem',
            width: '280px',
            maxWidth: '82vw',
          }}
        >
          {/* Progress Bar Track */}
          {/* <div
            style={{
              width: '100%',
              height: '5px',
              backgroundColor: '#e2e8f0',
              borderRadius: '999px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${displayPercent}%`,
                background: 'linear-gradient(90deg, #018F5D 0%, #0d284d 100%)',
                borderRadius: '999px',
                transition: 'width 0.15s ease-out',
                boxShadow: '0 0 10px rgba(1, 143, 93, 0.45)',
              }}
            />
          </div> */}

          {/* Percentage & Label Row */}
          {/* <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              fontFamily: "'Inter', -apple-system, sans-serif",
            }}
          >
            <span
              style={{
                fontSize: '0.74rem',
                fontWeight: 600,
                color: '#64748b',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Loading Experience
            </span>
            <span
              style={{
                fontSize: '0.92rem',
                fontWeight: 700,
                color: '#0d284d',
                fontVariantNumeric: 'tabular-nums',
                letterSpacing: '0.02em',
              }}
            >
              {displayPercent}%
            </span>
          </div> */}
        </div>

        {/* Skip Intro Button */}
        <button
          type="button"
          onClick={handleComplete}
          style={{
            position: 'absolute',
            bottom: '28px',
            right: '28px',
            background: '#f1f5f9',
            border: '1px solid #cbd5e1',
            color: '#1e293b',
            padding: '8px 18px',
            borderRadius: '24px',
            fontSize: '0.82rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
            transition: 'all 0.2s ease',
            zIndex: 10,
            letterSpacing: '0.03em',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#018F5D';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.borderColor = '#018F5D';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#f1f5f9';
            e.currentTarget.style.color = '#1e293b';
            e.currentTarget.style.borderColor = '#cbd5e1';
          }}
        >
          Skip Intro &rarr;
        </button>
      </div>

      {/* 2. BLUE SHUTTER GRID COLUMNS (Fades and slides away cleanly) */}
      {!shuttersDone && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            gridTemplateColumns: `repeat(${NUM_COLUMNS}, 1fr)`,
            width: '100vw',
            height: '100vh',
            zIndex: 5,
            pointerEvents: shuttersOpen ? 'none' : 'all',
          }}
        >
          {Array.from({ length: NUM_COLUMNS }).map((_, i) => {
            const delay = i * 0.1;

            return (
              <div
                key={i}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                {/* Vertical Gradient Border Line */}
                {i < NUM_COLUMNS - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '1px',
                      height: '100%',
                      background:
                        'linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(0, 210, 255, 0.4) 50%, rgba(255, 255, 255, 0.02) 100%)',
                      zIndex: 2,
                      pointerEvents: 'none',
                      opacity: shuttersOpen ? 0 : 1,
                      transition: `opacity 0.4s ease ${shuttersOpen ? delay : 0}s`,
                    }}
                  />
                )}

                {/* TOP HALF: Slides UP from center line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '50%',
                    backgroundColor: '#1d2744',
                    transition: `transform 0.8s cubic-bezier(0.77, 0, 0.175, 1) ${shuttersOpen ? delay : 0}s`,
                    transform: shuttersOpen ? 'translateY(-100%)' : 'translateY(0%)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '1px',
                      background:
                        'linear-gradient(90deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 210, 255, 0.6) 50%, rgba(0, 102, 255, 0.1) 100%)',
                    }}
                  />
                </div>

                {/* BOTTOM HALF: Slides DOWN from center line */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '50%',
                    backgroundColor: '#1d2744',
                    transition: `transform 0.8s cubic-bezier(0.77, 0, 0.175, 1) ${shuttersOpen ? delay : 0}s`,
                    transform: shuttersOpen ? 'translateY(100%)' : 'translateY(0%)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '1px',
                      background:
                        'linear-gradient(90deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 210, 255, 0.6) 50%, rgba(0, 102, 255, 0.1) 100%)',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

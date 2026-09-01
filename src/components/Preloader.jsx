'use client';

import React, { useState, useEffect, useRef } from 'react';

const NUM_COLUMNS = 5;

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [shuttersOpen, setShuttersOpen] = useState(false);
  const [shuttersDone, setShuttersDone] = useState(false);
  const [videoFadeOut, setVideoFadeOut] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // 1. Initial brief hold, then open the blue shutter columns
    const shutterTimer = setTimeout(() => {
      setShuttersOpen(true);
    }, 300);

    // 2. Shutters done sliding & fading out
    const shuttersDoneTimer = setTimeout(() => {
      setShuttersDone(true);
    }, 1250);

    // 3. Play video AFTER blue animation completes
    const videoPlayTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Autoplay fallback
        });
      }
    }, 1300);

    // 4. Safety fallback timer to ensure website opens even if video is blocked
    const safetyTimer = setTimeout(() => {
      handleComplete();
    }, 7500);

    return () => {
      clearTimeout(shutterTimer);
      clearTimeout(shuttersDoneTimer);
      clearTimeout(videoPlayTimer);
      clearTimeout(safetyTimer);
    };
  }, []);

  const handleComplete = () => {
    setVideoFadeOut(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  };

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
      {/* 1. INTRO VIDEO LAYER (Pure White Background & 70% Width) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          zIndex: 1,
        }}
      >
        <video
          ref={videoRef}
          src="/images/logo/txco-intro.mp4"
          muted
          playsInline
          onEnded={handleComplete}
          style={{
            width: '50%',
            maxWidth: '50vw',
            maxHeight: '50vh',
            objectFit: 'contain',
            backgroundColor: '#ffffff',
          }}
        />

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
                {/* Vertical Gradient Border Line - fades out synchronously */}
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

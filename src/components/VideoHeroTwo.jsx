'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import FoldText from './FoldText';
import '@/styles/video-hero-two.css';

export default function VideoHeroTwo() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const [headingComplete, setHeadingComplete] = useState(false);
  const [buttonRevealed, setButtonRevealed] = useState(false);
  const videoRef = useRef(null);

  // Notify Preloader that the hero video is buffered and ready to play
  const notifyVideoReady = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('txco:hero-video-ready'));
    }
  }, []);

  const handleHeadingComplete = useCallback(() => {
    setHeadingComplete(true);
  }, []);

  // Check if video is already cached/ready on mount
  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 2) {
      notifyVideoReady();
    }
  }, [notifyVideoReady]);

  // Synchronize with Preloader: FoldText unfolds when preloader has finished
  useEffect(() => {
    if (typeof window !== 'undefined' && window.__TXCO_PRELOADER_DONE) {
      setIsPreloaderDone(true);
      return;
    }

    const handlePreloaderDone = () => {
      setIsPreloaderDone(true);
    };

    window.addEventListener('txco:preloader-done', handlePreloaderDone);

    // Safeguard fallback: ensure trigger occurs even if preloader event already passed
    const fallbackTimer = setTimeout(() => {
      setIsPreloaderDone(true);
    }, 1200);

    return () => {
      window.removeEventListener('txco:preloader-done', handlePreloaderDone);
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Reveal button once FoldText animation finishes
  useEffect(() => {
    if (!headingComplete) return;
    setButtonRevealed(true);
  }, [headingComplete]);

  // Safeguard fallback for button reveal
  useEffect(() => {
    const btnFallback = setTimeout(() => {
      setButtonRevealed(true);
    }, 2000);
    return () => clearTimeout(btnFallback);
  }, []);

  return (
    <section className="hero-video-two-section" aria-label="Hero Video">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={notifyVideoReady}
        onLoadedData={notifyVideoReady}
        onCanPlayThrough={notifyVideoReady}
        className="hero-video-two-bg hero-video-bg"
      >
        <source src="/images/hero-video-2.mp4" type="video/mp4" />
      </video>

      {/* Overlay on video #404377 with opacity 0.3 */}
      <div className="hero-video-two-overlay" />

      {/* Center of the video: Heading & Button */}
      <div className="hero-video-two-content">
        <h1 className="hero-video-two-heading" style={{ minHeight: '3.6rem' }}>
          <FoldText
            text="PRECISION SEALING. PROVEN PERFORMANCE."
            hinge="top"
            duration={0.65}
            stagger={0.035}
            ease="power3.out"
            perspective={700}
            fontSize="clamp(2.2rem, 3.8vw, 3rem)"
            fontWeight={800}
            useGradient={true}
            isTriggered={isPreloaderDone}
            onComplete={handleHeadingComplete}
          />
        </h1>

        <div className={`hero-video-two-actions ${buttonRevealed ? 'is-revealed' : ''}`}>
          <Link href="/products" style={{ textDecoration: 'none' }}>
            <button className="txco-btn txco-btn-primary" style={{ padding: '7px 14px' }}>
              <span>VIEW PRODUCTS</span>
              <div className="txco-btn-icon-circle" style={{ border: 0 }}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="13 5 20 12 13 19" />
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import FoldText from './FoldText';
import '@/styles/video-hero.css';

const BOTTOM_TYPING_TEXT =
  'High-performance gasket solutions engineered for critical applications, extreme temperatures, high pressures, and demanding industrial environments.';

export default function VideoHero() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const [headingComplete, setHeadingComplete] = useState(false);
  const [buttonRevealed, setButtonRevealed] = useState(false);
  const [bottomRevealed, setBottomRevealed] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [startTyping, setStartTyping] = useState(false);
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

  // Synchronize with Preloader:
  // FoldText unfolds ONLY when the preloader has opened!
  useEffect(() => {
    // If preloader already finished (e.g. direct/client navigation)
    if (typeof window !== 'undefined' && window.__TXCO_PRELOADER_DONE) {
      setIsPreloaderDone(true);
      return;
    }

    const handlePreloaderDone = () => {
      setIsPreloaderDone(true);
    };

    window.addEventListener('txco:preloader-done', handlePreloaderDone);

    return () => {
      window.removeEventListener('txco:preloader-done', handlePreloaderDone);
    };
  }, []);

  // Sequential Chain after FoldText finishes:
  // 1. Button reveals from bottom to top
  // 2. Bottom text reveals and typing animation starts
  useEffect(() => {
    if (!headingComplete) return;

    setButtonRevealed(true);

    const timer = setTimeout(() => {
      setBottomRevealed(true);
      setStartTyping(true);
    }, 650);

    return () => clearTimeout(timer);
  }, [headingComplete]);

  // Character-by-character typing animation
  useEffect(() => {
    if (!startTyping) return;

    if (typedText.length < BOTTOM_TYPING_TEXT.length) {
      const typeTimer = setTimeout(() => {
        setTypedText(BOTTOM_TYPING_TEXT.slice(0, typedText.length + 1));
      }, 18);

      return () => clearTimeout(typeTimer);
    }
  }, [typedText, startTyping]);

  return (
    <section className="hero-video-section">
      {/* Background Video with preload="auto" and ready listeners */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={notifyVideoReady}
        onLoadedData={notifyVideoReady}
        className="hero-video-bg"
      >
        <source src="/images/hero-section-video.mp4" type="video/webm" />
      </video>

      {/* Subtle overlay */}
      <div className="hero-video-overlay" />

      {/* Center Content Container */}
      <div className="hero-video-content">
        {/* 1. Heading: 3D FoldText intro animation with exact gradient */}
        <h1 className="hero-gradient-text" style={{ minHeight: '3.6rem' }}>
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

        {/* 2. Button: Reveals after FoldText (fade in from bottom to top) */}
        <div className={`hero-video-actions ${buttonRevealed ? 'is-revealed' : ''}`}>
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

      {/* 3. Bottom Text: Reveals after button, followed by typing animation */}
      <div className={`hero-video-bottom ${bottomRevealed ? 'is-revealed' : ''}`}>
        <p className="hero-video-bottom-text">
          <span>{typedText}</span>
          {startTyping && <span className="hero-typing-cursor">|</span>}
        </p>
      </div>
    </section>
  );
}

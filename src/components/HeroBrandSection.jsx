'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import '@/styles/hero-brand.css';

export default function HeroBrandSection() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const headlineRef = useRef(null);
  const btnRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  // 1. Notify preloader and synchronize with preloader completion
  useEffect(() => {
    // Notify preloader that hero assets are ready
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('txco:hero-video-ready'));
    }

    // If preloader is already marked done (e.g. client navigation)
    if (typeof window !== 'undefined' && window.__TXCO_PRELOADER_DONE) {
      setIsPreloaderDone(true);
      return;
    }

    const handlePreloaderDone = () => {
      setIsPreloaderDone(true);
    };

    window.addEventListener('txco:preloader-done', handlePreloaderDone);

    // Fallback safety timer in case preloader is disabled or already finished (5s)
    const safetyTimer = setTimeout(() => {
      setIsPreloaderDone(true);
    }, 5000);

    return () => {
      window.removeEventListener('txco:preloader-done', handlePreloaderDone);
      clearTimeout(safetyTimer);
    };
  }, []);

  // 2. Entrance Animation: Triggers when preloader finishes
  useEffect(() => {
    if (!isPreloaderDone || hasAnimatedRef.current || !sectionRef.current) return;
    hasAnimatedRef.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Background subtle cinematic settle
      if (bgRef.current) {
        tl.fromTo(
          bgRef.current,
          { scale: 1.05, opacity: 0.8 },
          { scale: 1, opacity: 1, duration: 1.4, ease: 'power2.out' },
          0
        );
      }

      // Headline lines reveal from left with stagger
      const lines = headlineRef.current?.querySelectorAll('.hero-brand-line');
      if (lines && lines.length > 0) {
        tl.fromTo(
          lines,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.85, stagger: 0.12 },
          0.1
        );
      }

      // "TALK TO EXPERT" CTA button reveal
      if (btnRef.current) {
        tl.fromTo(
          btnRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out' },
          '-=0.45'
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [isPreloaderDone]);

  return (
    <section
      className={`hero-brand-section ${isPreloaderDone ? 'hero-ready' : 'hero-waiting'}`}
      ref={sectionRef}
      aria-label="TXCO Hero Section"
    >
      {/* Background Layer with hero-section-video-bg.avif */}
      <div className="hero-brand-bg-layer" aria-hidden="true">
        <div className="hero-brand-bg-img" ref={bgRef} />
      </div>

      {/* Soft gradient wash on left for optimal text contrast */}
      <div className="hero-brand-left-wash" aria-hidden="true" />

      {/* Top & Bottom seamless gradient transitions */}
      <div className="hero-brand-gradient-top" aria-hidden="true" />
      <div className="hero-brand-gradient-bottom" aria-hidden="true" />

      {/* Main Content Container */}
      <div className="hero-brand-container">
        <div className="hero-brand-content">
          {/* 3-Line Slanted Headline matching UI */}
          <h1 className="hero-brand-headline" ref={headlineRef}>
            <span className="hero-brand-line">
              <span className="hero-brand-navy">CUSTOM </span>
              <span className="hero-brand-green">GASKET,</span>
            </span>
            <span className="hero-brand-line hero-brand-navy">
              BOLT &amp; SEAL
            </span>
            <span className="hero-brand-line hero-brand-navy">
              MANUFACTURER
            </span>
          </h1>

          {/* Pill CTA Button: TALK TO EXPERT > */}
          <div className="hero-brand-btn-wrap" ref={btnRef}>
            <Link href="/contact" className="hero-brand-expert-btn">
              <span>TALK TO EXPERT</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hero-brand-btn-arrow"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

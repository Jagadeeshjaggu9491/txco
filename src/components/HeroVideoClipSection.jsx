'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import '@/styles/hero-video-clip.css';

const DEFAULT_BG = '/images/hero-video-bg-2.avif';
const DEFAULT_VIDEO = '/images/inside-clip-path-video.mp4';
const CHEVRON_CLIP_PATH = 'polygon(17% 10%, 50% 10%, 86.5% 49%, 50.5% 90%, 18% 90%,  54.5% 49%)';

export default function HeroVideoClipSection({
  bgImage = DEFAULT_BG,
  videoSrc = DEFAULT_VIDEO,
  clipPath = CHEVRON_CLIP_PATH,
}) {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const videoStageRef = useRef(null);
  const videoRef = useRef(null);
  const headlineRef = useRef(null);
  const btnRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  // 1. Notify preloader and synchronize with preloader completion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('txco:hero-video-ready'));
    }

    if (typeof window !== 'undefined' && window.__TXCO_PRELOADER_DONE) {
      setIsPreloaderDone(true);
      return;
    }

    const handlePreloaderDone = () => {
      setIsPreloaderDone(true);
    };

    window.addEventListener('txco:preloader-done', handlePreloaderDone);

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

      // Video chevron entrance from right (anchored from bottom)
      if (videoStageRef.current) {
        tl.fromTo(
          videoStageRef.current,
          { x: 50, opacity: 0, scale: 0.96, transformOrigin: 'bottom right' },
          { x: 0, opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out' },
          0.05
        );
      }

      // Headline lines reveal from left with stagger (exact match with HeroBrandSection)
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

  // Ensure video auto-plays reliably
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: muted is set on element
      });
    }
  }, []);

  return (
    <section
      className={`hero-video-clip-section ${isPreloaderDone ? 'hero-ready' : 'hero-waiting'}`}
      ref={sectionRef}
      aria-label="TXCO Hero Section with Clipped Video"
    >
      {/* 1. Background Image Layer */}
      <div className="hero-clip-bg-layer" aria-hidden="true">
        <div
          className="hero-clip-bg-img"
          ref={bgRef}
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
      </div>

      {/* Soft gradient wash on left for optimal text contrast */}
      <div className="hero-clip-left-wash" aria-hidden="true" />

      {/* Top & Bottom seamless gradient transitions */}
      <div className="hero-clip-gradient-top" aria-hidden="true" />
      <div className="hero-clip-gradient-bottom" aria-hidden="true" />

      {/* 2. Right Clipped Video Stage with polygon chevron */}
      <div className="hero-clip-video-stage" ref={videoStageRef}>
        <div
          className="hero-clip-video-shape"
          style={{
            clipPath: clipPath,
            WebkitClipPath: clipPath,
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hero-clip-video-element"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {/* Subtle sheen highlight */}
          <div className="hero-clip-video-sheen" aria-hidden="true" />
        </div>
      </div>

      {/* 3. Main Content Container - EXACTLY identical to hero-brand */}
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

'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import '@/styles/hero-rings.css';

const RINGS_DATA = [
  { id: 'ring-1', src: '/images/hero/1.png', alt: 'Precision Flange Gasket', className: 'hero-ring-1' },
  { id: 'ring-5', src: '/images/hero/5.png', alt: 'AF-159 Engineered Gasket', className: 'hero-ring-5' },
  { id: 'ring-4', src: '/images/hero/4.png', alt: 'Industrial Mesh Gasket', className: 'hero-ring-4' },
  { id: 'ring-3', src: '/images/hero/3.png', alt: 'Corrugated Metallic Gasket', className: 'hero-ring-3' },
  { id: 'ring-2', src: '/images/hero/2.png', alt: 'High Performance Segment Gasket', className: 'hero-ring-2' },
];

export default function HeroRingsSection() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const sectionRef = useRef(null);
  const chevronRef = useRef(null);
  const headlineRef = useRef(null);
  const ringsRef = useRef([]);
  const hasAnimatedRef = useRef(false);

  // 1. Listen for the preloader completion event
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

    // Generous fallback safety timer only in case preloader is not active (5s)
    const safetyTimer = setTimeout(() => {
      setIsPreloaderDone(true);
    }, 5000);

    return () => {
      window.removeEventListener('txco:preloader-done', handlePreloaderDone);
      clearTimeout(safetyTimer);
    };
  }, []);

  // 2. ONLY start revealing elements when preloader finishes, and run strictly once
  useEffect(() => {
    if (!isPreloaderDone || hasAnimatedRef.current || !sectionRef.current) return;
    hasAnimatedRef.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Left Column: Chevron + 3-line Headline intro
      if (chevronRef.current) {
        tl.fromTo(
          chevronRef.current,
          { x: -45, opacity: 0, scale: 0.8 },
          { x: 0, opacity: 1, scale: 1, duration: 0.75 }
        );
      }

      const lines = headlineRef.current?.querySelectorAll('.hero-rings-text-line');
      if (lines && lines.length > 0) {
        tl.fromTo(
          lines,
          { x: -55, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.75, stagger: 0.12 },
          '-=0.5'
        );
      }

      // Right Column: 5 Rings arrive from right, one after another, overlapping into place
      const validRings = ringsRef.current.filter(Boolean);
      if (validRings.length > 0) {
        tl.fromTo(
          validRings,
          {
            x: 280,
            opacity: 0,
            scale: 0.88,
            rotation: 8,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
          },
          '-=0.45'
        );

        // Subtle ambient floating physics after rings land
        tl.add(() => {
          validRings.forEach((ring, idx) => {
            if (!ring) return;
            gsap.to(ring, {
              y: idx % 2 === 0 ? -6 : 6,
              duration: 2.6 + idx * 0.35,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              delay: idx * 0.15,
            });
          });
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [isPreloaderDone]);

  return (
    <section
      className={`hero-rings-section ${isPreloaderDone ? 'hero-ready' : 'hero-waiting'}`}
      ref={sectionRef}
      aria-label="Hero Showcase"
    >
      {/* Background layer with hero-bg.png */}
      <div className="hero-rings-bg" />

      {/* Top & Bottom white gradient flow */}
      <div className="hero-rings-gradient-top" />
      <div className="hero-rings-gradient-bottom" />

      {/* Main Container */}
      <div className="hero-rings-container">
        {/* Left Side: Chevron + 3-line Headline */}
        <div className="hero-rings-left">
          <div className="hero-rings-brand-lockup">
            <div className="hero-rings-chevron-box" ref={chevronRef}>
              <img
                src="/images/hero/hero-text-icon.png"
                alt=""
                className="hero-rings-chevron-img"
              />
            </div>

            <h1 className="hero-rings-headline" ref={headlineRef}>
              <span className="hero-rings-text-line">
                <span className="hero-color-navy">CUSTOM </span>
                <span className="hero-color-green">GASKET,</span>
              </span>
              <span className="hero-rings-text-line hero-color-navy">
                BOLT &amp; SEAL
              </span>
              <span className="hero-rings-text-line hero-color-navy">
                MANUFACTURER
              </span>
            </h1>
          </div>
        </div>

        {/* Right Side: 5 Overlapping Rings with GSAP Entrance Animation */}
        <div className="hero-rings-right">
          <div className="hero-rings-stack" aria-hidden="true">
            {RINGS_DATA.map((ring, index) => (
              <div
                key={ring.id}
                className={`hero-ring-item ${ring.className}`}
                ref={(el) => (ringsRef.current[index] = el)}
              >
                <img
                  src={ring.src}
                  alt={ring.alt}
                  className="hero-ring-img"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

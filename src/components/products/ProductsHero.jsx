'use client';

import React, { useEffect, useRef } from 'react';
import { productsHeroData } from '@/data/productsData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductsHero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ringRefs = useRef([]);
  ringRefs.current = [];

  const addToRingRefs = (el) => {
    if (el && !ringRefs.current.includes(el)) {
      ringRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Title & Subtitle fade & slide up
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 }
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        );
      }

      // Staggered ring scaling and entrance
      if (ringRefs.current.length > 0) {
        tl.fromTo(
          ringRefs.current,
          { scale: 0.6, opacity: 0, y: 50 },
          {
            scale: (i) => [0.65, 0.85, 1.1, 1.4][i] || 1,
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.4)',
          },
          '-=0.6'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0c3b6d', // Rich Deep Industrial Blue matching screenshot 1
        backgroundImage: `
          radial-gradient(circle at 80% 50%, rgba(20, 80, 140, 0.6) 0%, rgba(12, 59, 109, 1) 70%),
          linear-gradient(135deg, #0a315c 0%, #0e447d 100%)
        `,
        overflow: 'hidden',
        color: '#ffffff',
        padding: '5rem 2rem',
        minHeight: '440px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Blueprint Architectural Drawing Background Overlay (Left side) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.18,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Cg stroke='%23ffffff' stroke-width='1.2' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 480 Q 50 380, 80 480 M60 480 Q 90 350, 120 480 M100 480 Q 140 320, 180 480 M150 480 Q 180 410, 210 480' /%3E%3Crect x='160' y='320' width='450' height='160' /%3E%3Cpath d='M160 320 L240 260 L400 260 L400 320 M240 260 L240 320' /%3E%3Crect x='600' y='360' width='180' height='120' /%3E%3Cline x1='200' y1='360' x2='240' y2='360' /%3E%3Cline x1='200' y1='400' x2='240' y2='400' /%3E%3Cline x1='200' y1='440' x2='240' y2='440' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
        className="hero-container-grid"
      >
        {/* Left Text Content */}
        <div style={{ maxWidth: '540px' }}>
          <h1
            ref={titleRef}
            style={{
              fontFamily: "'Open Sans', -apple-system, sans-serif",
              fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
              fontWeight: '600',
              letterSpacing: '0.04em',
              color: '#ffffff',
              marginBottom: '1.2rem',
              lineHeight: '1.15',
              textTransform: 'uppercase',
            }}
          >
            {productsHeroData.title}
          </h1>

          <p
            ref={subtitleRef}
            style={{
              fontSize: 'clamp(0.95rem, 1.3vw, 1.12rem)',
              fontWeight: '300',
              lineHeight: '1.65',
              color: 'rgba(255, 255, 255, 0.92)',
              letterSpacing: '0.01em',
              margin: 0,
            }}
          >
            {productsHeroData.subtitle}
          </p>
        </div>

        {/* Right Graphic Content: TXCO Metallic Ring Seals stack matching Screenshot 1 */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '360px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            viewBox="0 0 700 500"
            style={{
              width: '100%',
              height: '100%',
              maxHeight: '380px',
              filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.45))',
            }}
          >
            <defs>
              {/* Metallic Silver Steel Gradient */}
              <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="20%" stopColor="#e2e8f0" />
                <stop offset="45%" stopColor="#94a3b8" />
                <stop offset="70%" stopColor="#cbd5e1" />
                <stop offset="90%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>

              <linearGradient id="metalRim" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="50%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
            </defs>

            {/* Ring 1 (Smallest - Front Left) */}
            <g ref={addToRingRefs} transform="translate(180, 270) rotate(-22) scale(0.65)">
              <ellipse cx="200" cy="180" rx="140" ry="85" fill="none" stroke="url(#metalGrad)" strokeWidth="26" />
              <ellipse cx="200" cy="180" rx="140" ry="85" fill="none" stroke="url(#metalRim)" strokeWidth="3" />
              <ellipse cx="200" cy="180" rx="127" ry="72" fill="none" stroke="#475569" strokeWidth="2" />
              <text x="280" y="160" fill="#1e293b" fontSize="13" fontWeight="bold" letterSpacing="1" transform="rotate(25 280 160)">
                ❄ txco
              </text>
            </g>

            {/* Ring 2 (Medium-Small) */}
            <g ref={addToRingRefs} transform="translate(230, 220) rotate(-22) scale(0.85)">
              <ellipse cx="200" cy="180" rx="140" ry="85" fill="none" stroke="url(#metalGrad)" strokeWidth="26" />
              <ellipse cx="200" cy="180" rx="140" ry="85" fill="none" stroke="url(#metalRim)" strokeWidth="3" />
              <ellipse cx="200" cy="180" rx="127" ry="72" fill="none" stroke="#475569" strokeWidth="2" />
              <text x="280" y="160" fill="#1e293b" fontSize="13" fontWeight="bold" letterSpacing="1" transform="rotate(25 280 160)">
                ❄ txco
              </text>
            </g>

            {/* Ring 3 (Medium-Large) */}
            <g ref={addToRingRefs} transform="translate(290, 160) rotate(-22) scale(1.1)">
              <ellipse cx="200" cy="180" rx="140" ry="85" fill="none" stroke="url(#metalGrad)" strokeWidth="26" />
              <ellipse cx="200" cy="180" rx="140" ry="85" fill="none" stroke="url(#metalRim)" strokeWidth="3" />
              <ellipse cx="200" cy="180" rx="127" ry="72" fill="none" stroke="#475569" strokeWidth="2" />
              <text x="280" y="160" fill="#1e293b" fontSize="13" fontWeight="bold" letterSpacing="1" transform="rotate(25 280 160)">
                ❄ txco
              </text>
            </g>

            {/* Ring 4 (Largest - Back Right) */}
            <g ref={addToRingRefs} transform="translate(360, 90) rotate(-22) scale(1.4)">
              <ellipse cx="200" cy="180" rx="140" ry="85" fill="none" stroke="url(#metalGrad)" strokeWidth="26" />
              <ellipse cx="200" cy="180" rx="140" ry="85" fill="none" stroke="url(#metalRim)" strokeWidth="3" />
              <ellipse cx="200" cy="180" rx="127" ry="72" fill="none" stroke="#475569" strokeWidth="2" />
              <text x="280" y="160" fill="#1e293b" fontSize="13" fontWeight="bold" letterSpacing="1" transform="rotate(25 280 160)">
                ❄ txco
              </text>
            </g>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-container-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-container-grid > div {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}

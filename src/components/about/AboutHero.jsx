'use client';

import React, { useEffect, useRef } from 'react';
import { aboutHeroData } from '@/data/aboutData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutHero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#052C58',
        backgroundImage: `url('/images/banner/txco-page-banner.avif')`,
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        color: '#ffffff',
        padding: '5.5rem 2rem 5rem 2rem',
        minHeight: '450px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: '640px' }}>
          <h1
            ref={titleRef}
            style={{
              fontFamily: "'Inter', -apple-system, sans-serif",
              fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
              fontWeight: '600',
              letterSpacing: '0.04em',
              color: '#ffffff',
              marginBottom: '1.2rem',
              lineHeight: '1.15',
              textTransform: 'uppercase',
            }}
          >
            {aboutHeroData.title}
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
            {aboutHeroData.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

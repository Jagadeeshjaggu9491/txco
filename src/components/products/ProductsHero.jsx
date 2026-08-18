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
  const imageRef = useRef(null);

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

      // Banner image entrance
      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { scale: 0.85, opacity: 0, y: 40 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: 'back.out(1.2)',
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
        backgroundColor: '#052C58',
        backgroundImage: `linear-gradient(135deg, #114680 0%, #052C58 100%)`, // Official brand linear gradient for whole banner
        overflow: 'hidden',
        color: '#ffffff',
        padding: '5rem 2rem 4rem 2rem',
        minHeight: '460px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background Shape Overlay (Shifted downwards at bottom matching design image) */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: '-45px', // Shifted downwards so line art sits perfectly at bottom
          width: '100%',
          height: '70%',
          backgroundImage: `url('/images/products/products-bg.png')`,
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% auto',
          opacity: 0.92,
          pointerEvents: 'none',
          zIndex: 1,
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

        {/* Right Graphic Image: banner-imag.png from /images/products/ */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            ref={imageRef}
            src="/images/products/banner-imag.png"
            alt="TXCO Sealing Products Banner"
            style={{
              maxWidth: '100%',
              maxHeight: '380px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.35))',
            }}
            onError={(e) => {
              e.currentTarget.src = '/images/home-products.png';
            }}
          />
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

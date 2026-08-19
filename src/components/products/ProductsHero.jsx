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
    <section ref={containerRef} className="products-hero-section">
      {/* Background Shape Overlay */}
      <div className="products-hero-bg-overlay" />

      <div className="products-hero-grid">
        {/* Left Text Content */}
        <div style={{ maxWidth: '540px' }}>
          <h1 ref={titleRef} className="products-hero-title">
            {productsHeroData.title}
          </h1>

          <p ref={subtitleRef} className="products-hero-subtitle">
            {productsHeroData.subtitle}
          </p>
        </div>

        {/* Right Graphic Image */}
        <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            ref={imageRef}
            src="/images/products/banner-imag.png"
            alt="TXCO Sealing Products Banner"
            className="products-hero-banner-img"
            onError={(e) => {
              e.currentTarget.src = '/images/home-products.png';
            }}
          />
        </div>
      </div>
    </section>
  );
}

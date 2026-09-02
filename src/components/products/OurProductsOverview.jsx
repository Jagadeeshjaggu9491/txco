'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { mainProductCategories } from '@/data/productsData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OurProductsOverview() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const btnRef = useRef(null);

  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' }
        );
      }

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.2'
        );
      }

      if (cardsRef.current.length > 0) {
        tl.fromTo(
          cardsRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.18,
            ease: 'power3.out',
          },
          '-=0.3'
        );
      }

      if (btnRef.current) {
        tl.fromTo(
          btnRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="products-overview-section">
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Top Badge */}
        <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
          <span ref={badgeRef} className="section-badge">
            OUR PRODUCTS
          </span>
        </div>

        {/* Heading Title */}
        <h2
          ref={headingRef}
          className="section-title section-title-center"
          style={{ maxWidth: '1080px', margin: '0 auto 3.5rem auto' }}
        >
          Don’t let demanding sealing requirements become an engineering challenge.
        </h2>

        {/* Product Cards Flexbox with exactly 3 cards per row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '3.5rem',
          }}
          className="products-flex-container"
        >
          {mainProductCategories.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="product-card-flex-item"
              style={{
                flex: '0 0 calc(33.333% - 1.35rem)',
                maxWidth: 'calc(33.333% - 1.35rem)',
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
              }}
            >
              <div
                ref={addToCardsRef}
                className="product-overview-card"
                style={{ width: '100%' }}
              >
                {/* Product Image Preview Box */}
                <div className="product-img-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      padding: '0',
                    }}
                    onError={(e) => {
                      e.currentTarget.src = item.fallbackImage;
                    }}
                  />
                </div>

                {/* Card Content & Arrow Button */}
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', marginTop: '1.2rem' }}>
                  <div style={{ flexGrow: 1 }}>
                    <h3 className="product-card-title">
                      {item.title}
                    </h3>
                    <p className="product-card-desc">
                      {item.description}
                    </p>
                  </div>

                  <div className="product-arrow-badge">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <polyline points="13 5 20 12 13 19" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>


        {/* Bottom CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/industries" style={{ textDecoration: 'none' }}>
            <button className="txco-btn txco-btn-steel">
              <span>CONTACT OUR EXPERTS</span>
              <div className="txco-btn-icon-circle">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
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

'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CustomManufacturer() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title entrance
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Cards staggered entrance
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { y: 55, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        backgroundColor: '#eef2f9', // Cool light blue-grey background matching reference
        padding: '5.5rem 2rem',
        color: '#253258',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        {/* Main Title */}
        <h2
          ref={titleRef}
          style={{
            fontFamily: "'Open Sans', -apple-system, sans-serif",
            fontSize: 'clamp(1.4rem, 2.5vw, 2.1rem)',
            fontWeight: '700',
            textAlign: 'center',
            color: '#253258',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '4rem',
          }}
        >
          CUSTOM GASKET, BOLT & SEAL MANUFACTURER
        </h2>

        {/* 2 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2.5rem',
          }}
          className="custom-manufacturer-grid"
        >
          {/* Card 1: Our Legacy */}
          <div
            ref={addToCardsRef}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '3.2rem 2.8rem',
              boxShadow: '0 6px 20px rgba(37, 50, 88, 0.03)',
            }}
          >
            <h3
              style={{
                fontFamily: "'Open Sans', -apple-system, sans-serif",
                fontSize: '1.45rem',
                fontWeight: '600',
                color: '#3b4a76',
                marginBottom: '1.2rem',
                lineHeight: '1.3',
              }}
            >
              Our Legacy
            </h3>
            <p
              style={{
                fontSize: '0.98rem',
                fontWeight: '400',
                color: '#475569',
                lineHeight: '1.7',
                margin: 0,
              }}
            >
              As one of the largest privately held custom gasket, fastener, and hose manufacturers and distributors in the world, TXCO is the partner you can trust to deliver quality products whenever you need them — at consistently fair pricing. Since 1947, we've been providing industry-leading safety sealing and attachment solutions that help keep communities safe and drive progress across the world.
            </p>
          </div>

          {/* Card 2: Your Innovation Partner */}
          <div
            ref={addToCardsRef}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '3.2rem 2.8rem',
              boxShadow: '0 6px 20px rgba(37, 50, 88, 0.03)',
            }}
          >
            <h3
              style={{
                fontFamily: "'Open Sans', -apple-system, sans-serif",
                fontSize: '1.45rem',
                fontWeight: '600',
                color: '#3b4a76',
                marginBottom: '1.2rem',
                lineHeight: '1.3',
              }}
            >
              Your Innovation Partner
            </h3>
            <p
              style={{
                fontSize: '0.98rem',
                fontWeight: '400',
                color: '#475569',
                lineHeight: '1.7',
                margin: 0,
              }}
            >
              We believe progress is built on partnership. That's why we're available 24/7 with the fastest response time in the industry. We seamlessly handle high-volume and quick-turn needs for both standard components and one-of-a-kind engineered solutions. Learn how we're setting the standard for quality and ingenuity.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 850px) {
          .custom-manufacturer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

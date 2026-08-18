'use client';

import React, { useEffect, useRef } from 'react';
import { industrialSealingProducts } from '@/data/productsData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IndustrialSealingProducts() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      });

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
        );
      }

      if (textRef.current) {
        tl.fromTo(
          textRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.3'
        );
      }

      if (cardsRef.current.length > 0) {
        tl.fromTo(
          cardsRef.current,
          { opacity: 0, y: 45, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.22,
            ease: 'power3.out',
          },
          '-=0.3'
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
        backgroundColor: '#ffffff', // Pure white background matching screenshot 3
        padding: '5rem 2rem 5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Header Title & Paragraph */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2
            ref={headingRef}
            style={{
              fontFamily: "'Open Sans', -apple-system, sans-serif",
              fontSize: 'clamp(1.6rem, 2.6vw, 2.3rem)',
              fontWeight: '600',
              color: '#052C58',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '1.4rem',
            }}
          >
            {industrialSealingProducts.heading}
          </h2>

          <p
            ref={textRef}
            style={{
              fontSize: '0.98rem',
              fontWeight: '400',
              color: '#475569',
              maxWidth: '920px',
              margin: '0 auto',
              lineHeight: '1.68',
            }}
          >
            {industrialSealingProducts.mainDescription}
          </p>
        </div>

        {/* 3 Lavender Tinted Cards matching screenshot 3 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
          {industrialSealingProducts.cards.map((card) => (
            <div
              key={card.id}
              ref={addToCardsRef}
              style={{
                backgroundColor: '#f4f3fe', // Lavender background tint matching screenshot 3
                borderRadius: '20px',
                padding: '2.5rem 3rem',
                border: '1px solid rgba(17, 70, 128, 0.15)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
              }}
              className="info-card-box"
            >
              <h3
                style={{
                  fontFamily: "'Open Sans', -apple-system, sans-serif",
                  fontSize: '1.45rem',
                  fontWeight: '600',
                  color: '#052C58',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#475569',
                  lineHeight: '1.65',
                  marginBottom: '1.5rem',
                }}
              >
                {card.description}
              </p>

              <div
                style={{
                  fontSize: '0.92rem',
                  color: '#475569',
                  lineHeight: '1.6',
                }}
              >
                <strong
                  style={{
                    color: '#052C58',
                    letterSpacing: '0.06em',
                    fontSize: '0.88rem',
                  }}
                >
                  {card.label}
                </strong>
                <br />
                {card.productsList.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 600px) {
          .info-card-box {
            padding: 1.8rem 1.4rem !important;
          }
        }
      `}</style>
    </section>
  );
}

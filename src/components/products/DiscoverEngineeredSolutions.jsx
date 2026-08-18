'use client';

import React, { useEffect, useRef } from 'react';
import { engineeredSolutionsData } from '@/data/productsData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Custom SVG Icons matching screenshot 4 (Lightbulb, Chimney, Rig, Helmet)
function CardIcon({ type }) {
  switch (type) {
    case 'lightbulb':
      return (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="#2a3860" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 6 C20 6 12 15 12 26 C12 34 18 40 22 44 L22 50 L42 50 L42 44 C46 40 52 34 52 26 C52 15 44 6 32 6 Z" />
          <line x1="26" y1="56" x2="38" y2="56" />
          <path d="M32 20 Q36 28 32 36" strokeWidth="2" />
          <path d="M26 24 C28 20 36 20 38 24" strokeWidth="2" />
        </svg>
      );
    case 'factory':
      return (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="#2a3860" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 56 L12 36 L24 44 L24 24 L36 32 L36 12 L52 12 L52 56 Z" />
          <path d="M40 8 Q44 4 48 8 Q52 4 56 8" strokeDasharray="3 3" />
          <rect x="42" y="24" width="6" height="6" />
          <rect x="42" y="38" width="6" height="6" />
        </svg>
      );
    case 'rig':
      return (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="#2a3860" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 8 L14 56 H50 Z" />
          <line x1="20" y1="40" x2="44" y2="40" />
          <line x1="24" y1="26" x2="40" y2="26" />
          <line x1="14" y1="56" x2="50" y2="24" strokeWidth="1.5" />
          <line x1="50" y1="56" x2="14" y2="24" strokeWidth="1.5" />
          <line x1="8" y1="56" x2="56" y2="56" />
        </svg>
      );
    case 'helmet':
      return (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="#2a3860" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 36 C12 20 20 14 32 14 C44 14 52 20 52 36 Z" />
          <path d="M6 38 C6 35 10 35 12 35 H52 C54 35 58 35 58 38 V42 H6 Z" />
          <line x1="32" y1="14" x2="32" y2="35" strokeWidth="3" />
          <circle cx="32" cy="46" r="2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function DiscoverEngineeredSolutions() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const bannerRef = useRef(null);

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

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
        );
      }

      if (cardsRef.current.length > 0) {
        tl.fromTo(
          cardsRef.current,
          { opacity: 0, scale: 0.85, y: 35 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.15,
            ease: 'back.out(1.4)',
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
        backgroundColor: '#ffffff',
        padding: '4.5rem 0 0 0',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 2rem' }}>
        <h2
          ref={headingRef}
          style={{
            fontFamily: "'Open Sans', -apple-system, sans-serif",
            fontSize: 'clamp(1.6rem, 2.6vw, 2.3rem)',
            fontWeight: '600',
            color: '#052C58',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '3.5rem',
          }}
        >
          {engineeredSolutionsData.heading}
        </h2>

        {/* 4 Square Icon Cards Grid matching screenshot 4 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem 1.5rem',
            marginBottom: '5rem',
          }}
          className="engineered-cards-grid"
        >
          {engineeredSolutionsData.items.map((card) => (
            <div
              key={card.id}
              ref={addToCardsRef}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  border: '1.5px solid #114680',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.2rem',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                  transition:
                    'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#052C58';
                  e.currentTarget.style.boxShadow =
                    '0 12px 28px rgba(5, 44, 88, 0.14)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#114680';
                  e.currentTarget.style.boxShadow =
                    '0 4px 12px rgba(0, 0, 0, 0.03)';
                }}
              >
                {/* Fallback to Image icon if available, otherwise SVG */}
                {card.iconSrc ? (
                  <img
                    src={card.iconSrc}
                    alt={card.title}
                    style={{
                      maxHeight: '70%',
                      maxWidth: '70%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextSibling) {
                        e.currentTarget.nextSibling.style.display = 'block';
                      }
                    }}
                  />
                ) : null}
                <div style={{ display: card.iconSrc ? 'none' : 'block' }}>
                  <CardIcon type={card.svgType} />
                </div>
              </div>
              <span
                style={{
                  fontSize: '0.88rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  lineHeight: '1.3',
                }}
              >
                {card.title}
              </span>
            </div>
          ))}
        </div>
      </div>



      <style jsx>{`
        @media (max-width: 900px) {
          .engineered-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .bottom-banner-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}

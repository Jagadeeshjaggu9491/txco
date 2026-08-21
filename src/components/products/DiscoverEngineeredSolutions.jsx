'use client';

import React, { useEffect, useRef } from 'react';
import { engineeredSolutionsData as defaultData } from '@/data/productsData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Custom SVG Icons
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

export default function DiscoverEngineeredSolutions({ data = defaultData, className = '' }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
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
    <section ref={sectionRef} className={`discover-solutions-section ${className}`.trim()}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 2rem' }}>
        <h2
          ref={headingRef}
          className="section-title section-title-center"
          style={{ marginBottom: '3.5rem' }}
        >
          {data.heading}
        </h2>

        {/* 4 Square Icon Cards Grid */}
        <div className="grid-4-col" style={{ marginBottom: '5rem' }}>
          {data.items.map((card) => (
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
              <div className="industry-card-box">
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
              <span className="solution-square-title">
                {card.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useEffect, useRef } from 'react';
import { industrialSealingProducts as defaultData } from '@/data/productsData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IndustrialSealingProducts({ data = defaultData, className = '' }) {
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
    <section ref={sectionRef} className={`industrial-sealing-section pb-0 ${className}`.trim()}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Header Title & Paragraph */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 ref={headingRef} className="section-title section-title-center">
            {data.heading}
          </h2>

          <p ref={textRef} className="section-subtitle section-subtitle-center" style={{ maxWidth: '920px' }}>
            {data.mainDescription}
          </p>
        </div>

        {/* 3 Lavender Tinted Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
          {data.cards.map((card) => (
            <div
              key={card.id}
              ref={addToCardsRef}
              className="info-card-box"
            >
              <h3 className="info-card-title">
                {card.title}
              </h3>

              <p className="info-card-desc">
                {card.description}
              </p>

              <div style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <strong className="info-card-label">
                  {card.label}
                </strong>
                <br />
                {Array.isArray(card.productsList) ? card.productsList.join(' • ') : card.productsList}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

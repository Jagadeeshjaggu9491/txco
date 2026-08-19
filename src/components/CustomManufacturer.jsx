'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { customManufacturerData } from '@/data/homeData';

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
    <section ref={sectionRef} className="custom-manufacturer-section">
      <div className="txco-container">
        <h2 ref={titleRef} className="section-title section-title-center" style={{ marginBottom: '4rem' }}>
          {customManufacturerData.title}
        </h2>

        <div className="custom-manufacturer-grid">
          {customManufacturerData.cards.map((card, idx) => (
            <div key={idx} ref={addToCardsRef} className="custom-manufacturer-card">
              <h3 className="custom-manufacturer-card-title">
                {card.title}
              </h3>
              <p className="custom-manufacturer-card-desc">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

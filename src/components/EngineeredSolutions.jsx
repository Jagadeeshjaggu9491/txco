'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const solutionCategories = [
  {
    id: 'sealing-products',
    line1: 'SEALING',
    line2: 'PRODUCTS',
    image: '/images/SEALING-PRODUCTS-img.avif',
    alt: 'TXCO Sealing Products Ring Gasket',
    href: '/products',
  },
  {
    id: 'engineered-solutions',
    line1: 'ENGINEERED',
    line2: 'SOLUTIONS',
    image: '/images/ENGINEERED-SOLUTIONS-img.avif',
    alt: 'TXCO Engineered Flange and Gasket Solutions',
    href: '/industries',
  },
  {
    id: 'technical-services',
    line1: 'TECHNICAL',
    line2: 'SERVICES',
    image: '/images/TECHNICAL-SERVICES-img.avif',
    alt: 'TXCO Field Support and Technical Services',
    href: '/services',
  },
];

export default function EngineeredSolutions() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const photoRef = useRef(null);
  const watermarkRef = useRef(null);

  cardsRef.current = [];
  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Cards entrance
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // Photo entrance
      if (photoRef.current) {
        gsap.fromTo(
          photoRef.current,
          { scale: 0.94, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.95,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // Watermark entrance
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="engineered-solutions-section">
      {/* Background Left-Pointing Chevron Watermark */}
      <div ref={watermarkRef} className="engineered-watermark-wrapper" aria-hidden="true">
        <img
          src="/images/logo/txco-mark-left.png"
          alt=""
          className="engineered-watermark-img"
        />
      </div>

      <div className="engineered-solutions-container">
        {/* Left Column: 3 Category Cards */}
        <div className="engineered-cards-col">
          {solutionCategories.map((cat, idx) => {
            const isActive = activeIndex === idx;
            return (
              <Link
                key={cat.id}
                href={cat.href}
                ref={addToCardsRef}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`engineered-pill-card ${isActive ? 'engineered-card-active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <div className="engineered-card-title">
                  <span>{cat.line1}</span>
                  <span>{cat.line2}</span>
                </div>

                <div className="engineered-card-img-wrap">
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    className="engineered-card-img"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Right Column: Feature Photo */}
        <div ref={photoRef} className="engineered-photo-col">
          <img
            src="/images/Gasket-Inspection.avif"
            alt="TXCO Quality Engineers Inspecting Precision Gasket"
            className="engineered-feature-photo"
          />
        </div>
      </div>
    </section>
  );
}

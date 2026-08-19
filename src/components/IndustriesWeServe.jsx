'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { industriesData } from '@/data/homeData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IndustriesWeServe() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const industries = industriesData;

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

      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }
        );
      }

      if (cardsRef.current.length > 0) {
        tl.fromTo(
          cardsRef.current,
          { y: 55, opacity: 0, scale: 0.92 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.4'
        );
      }

      if (buttonRef.current) {
        tl.fromTo(
          buttonRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.2'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="industries-section">
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Header */}
        <div ref={headerRef} className="industries-header-wrapper">
          <h2 className="industries-heading">
            Industries We Serve
          </h2>
          <p className="industries-description">
            TXCO can help you solve the urgent needs you face today while helping you scale for tomorrow. Learn how we customize our solutions and technical expertise around your industry's unique challenges.
          </p>
        </div>

        {/* 8 Square Cards Grid */}
        <div ref={gridRef} className="industries-grid">
          {industries.map((item, idx) => (
            <div key={idx} ref={addToCardsRef} className="industry-card-item">
              <div className="industry-card-box">
                <img
                  src={item.iconSrc}
                  alt={item.title}
                  className="industry-icon-img"
                />
              </div>

              <span className="industry-card-title">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div ref={buttonRef} style={{ textAlign: 'center' }}>
          <Link href="/industries" style={{ textDecoration: 'none' }}>
            <button className="txco-btn txco-btn-steel">
              <span>VIEW INDUSTRIES</span>
              <div className="txco-btn-icon-circle">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b4674"
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

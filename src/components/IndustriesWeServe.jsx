'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  const industries = [
    {
      title: 'Renewable Energy',
      iconSrc: '/images/icons/industries/Renewable Energy.png',
    },
    {
      title: 'Power Generation',
      iconSrc: '/images/icons/industries/Power Generation.png',
    },
    {
      title: 'Oil and Gas',
      iconSrc: '/images/icons/industries/Oil and Gas.png',
    },
    {
      title: 'EPC',
      iconSrc: '/images/icons/industries/EPC.png',
    },
    {
      title: 'Chemical',
      iconSrc: '/images/icons/industries/Chemical.png',
    },
    {
      title: 'Manufacture',
      iconSrc: '/images/icons/industries/Manufacture.png',
    },
    {
      title: 'Metals and Mining',
      iconSrc: '/images/icons/industries/Metals and Mining.png',
    },
    {
      title: 'Water and Wastewater',
      iconSrc: '/images/icons/industries/Water and Wastewater.png',
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%', // Triggers smoothly when top of section hits 80% of screen
          toggleActions: 'play none none reverse',
        },
      });

      // 1. Header Animation
      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }
        );
      }

      // 2. 8 Cards Grid Stagger Animation
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

      // 3. CTA Button Entrance Animation
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
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        backgroundColor: '#f3f5f9', // Cool light grey background
        padding: '5.5rem 2rem',
        color: '#253258',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            style={{
              fontFamily: "'Open Sans', -apple-system, sans-serif",
              fontSize: 'clamp(1.5rem, 2.6vw, 2.2rem)',
              fontWeight: '700',
              color: '#253258',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            INDUSTRIES WE SERVE
          </h2>
          <p
            style={{
              fontFamily: "'Open Sans', -apple-system, sans-serif",
              fontSize: '0.96rem',
              color: '#475569',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: '1.55',
            }}
          >
            We solve urgent operating needs while helping teams scale for tomorrow with technical expertise built for demanding environments.
          </p>
        </div>

        {/* 8 Square Cards Grid (4 columns x 2 rows) */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2.5rem 2rem',
            marginBottom: '4.5rem',
          }}
          className="industries-grid"
        >
          {industries.map((item, idx) => (
            <div
              key={idx}
              ref={addToCardsRef}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Perfect 1:1 Square Card Box */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #cbd5e1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.2rem',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#253258';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(37, 50, 88, 0.14)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#cbd5e1';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.03)';
                }}
              >
                {/* Big PNG Icon Image */}
                <img
                  src={item.iconSrc}
                  alt={item.title}
                  style={{
                    maxHeight: '75%',
                    maxWidth: '75%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </div>

              {/* Title under Card */}
              <span
                style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  lineHeight: '1.3',
                }}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div ref={buttonRef} style={{ textAlign: 'center' }}>
          <button
            style={{
              padding: '0.9rem 2.2rem',
              backgroundColor: '#344473',
              color: '#ffffff',
              fontSize: '0.85rem',
              fontWeight: '700',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: '0px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
              boxShadow: '0 4px 15px rgba(52, 68, 115, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#253258';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#344473';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>VIEW INDUSTRIES</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="13 5 20 12 13 19" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 540px) {
          .industries-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

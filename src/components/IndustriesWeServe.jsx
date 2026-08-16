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
      title: 'Manufacturing',
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
          start: 'top 80%',
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
        backgroundColor: '#f2f6fc', // Light cool blue tint background matching reference screenshot
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
              fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)',
              fontWeight: '600',
              color: '#1e293b',
              letterSpacing: '0.01em',
              marginBottom: '1rem',
            }}
          >
            Industries We Serve
          </h2>
          <p
            style={{
              fontFamily: "'Open Sans', -apple-system, sans-serif",
              fontSize: '0.96rem',
              color: '#475569',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            TXCO can help you solve the urgent needs you face today while helping you scale for tomorrow. Learn how we customize our solutions and technical expertise around your industry's unique challenges.
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
              {/* Perfect 1:1 Square Card Box with Dark Navy Border */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  border: '1.5px solid #2a3860', // Dark navy border line matching screenshot
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
                  e.currentTarget.style.borderColor = '#0b2b48';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(37, 50, 88, 0.14)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#2a3860';
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
                  fontSize: '0.94rem',
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
              padding: '0.85rem 2rem',
              backgroundColor: '#3b4674',
              color: '#ffffff',
              fontSize: '0.9rem',
              fontWeight: '700',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: '0px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.85rem',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
              boxShadow: '0 4px 15px rgba(59, 70, 116, 0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2a3356';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3b4674';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>VIEW INDUSTRIES</span>
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
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

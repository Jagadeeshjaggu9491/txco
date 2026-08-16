'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SustainabilitySection() {
  const sectionRef = useRef(null);
  const colsRef = useRef([]);

  colsRef.current = [];

  const addToColsRef = (el) => {
    if (el && !colsRef.current.includes(el)) {
      colsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (colsRef.current.length > 0) {
        gsap.fromTo(
          colsRef.current,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
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
        backgroundColor: '#ffffff',
        padding: '5.5rem 2rem',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1080px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '4rem 5rem',
        }}
        className="sustainability-grid"
      >
        {/* Left Column: Renewable Energy */}
        <div
          ref={addToColsRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Open Sans', -apple-system, sans-serif",
                fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                fontWeight: '600',
                color: '#3b4674',
                lineHeight: '1.25',
                marginBottom: '1.4rem',
              }}
            >
              Accelerating <br /> renewable energy
            </h2>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: '400',
                color: '#475569',
                lineHeight: '1.65',
                marginBottom: '2.4rem',
              }}
            >
              We’re committed to being the custom gasket, seal and bolt manufacturer of choice for the renewable energy industry, by engineering custom sealing and attachment solutions for wind energy, hydro energy, geothermal energy, and alternative fuels sectors. Regardless of industry, we help every customer increase efficiency and pursue lower emissions.
            </p>
          </div>

          <Link href="/services" style={{ textDecoration: 'none' }}>
            <button
              style={{
                padding: '0.85rem 1.8rem',
                backgroundColor: '#3b4674',
                color: '#ffffff',
                fontSize: '0.85rem',
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
              <span>EXPLORE RENEWABLE SOLUTIONS</span>
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
          </Link>
        </div>

        {/* Right Column: Safety & Sustainability */}
        <div
          ref={addToColsRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Open Sans', -apple-system, sans-serif",
                fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                fontWeight: '600',
                color: '#3b4674',
                lineHeight: '1.25',
                marginBottom: '1.4rem',
              }}
            >
              Committed to Safety <br /> and Sustainability
            </h2>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: '400',
                color: '#475569',
                lineHeight: '1.65',
                marginBottom: '2.4rem',
              }}
            >
              Through constant improvement of our{' '}
              <Link href="/products" style={{ color: '#1e293b', textDecoration: 'underline', fontWeight: '500' }}>
                products
              </Link>
              , processes, and services, we support the safe operations of essential industries and partner with forward-thinking customers on innovations that protect the environment for future generations.
            </p>
          </div>

          <Link href="/about" style={{ textDecoration: 'none' }}>
            <button
              style={{
                padding: '0.85rem 1.8rem',
                backgroundColor: '#3b4674',
                color: '#ffffff',
                fontSize: '0.85rem',
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
              <span>SUSTAINABILITY AT TXCO</span>
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
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .sustainability-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

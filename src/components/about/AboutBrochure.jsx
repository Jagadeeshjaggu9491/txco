'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { companyOverviewData } from '@/data/aboutData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutBrochure() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left image entrance
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { x: -50, opacity: 0 },
          {
            x: 0,
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

      // Right text entrance
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { x: 50, opacity: 0 },
          {
            x: 0,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        backgroundColor: '#f4f6fb', // Cool light blue background tint matching Image 3
        padding: '5.5rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '4rem',
          alignItems: 'center',
        }}
        className="about-brochure-grid"
      >
        {/* Left Column: Brochure Preview Cover Image */}
        <div
          ref={leftColRef}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <img
            src={companyOverviewData.image}
            alt="TXCO Company Overview Brochure"
            style={{
              maxWidth: '340px',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              boxShadow: '0 14px 36px rgba(0, 0, 0, 0.12)',
            }}
            onError={(e) => {
              e.currentTarget.src = '/images/home-products.png';
            }}
          />
        </div>

        {/* Right Column: Company Overview Title, Description & CTA Button */}
        <div ref={rightColRef}>
          <h2
            style={{
              fontFamily: "'Open Sans', -apple-system, sans-serif",
              fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
              fontWeight: '600',
              color: '#3f4770',
              marginBottom: '1.2rem',
              lineHeight: '1.2',
            }}
          >
            {companyOverviewData.title}
          </h2>

          <p
            style={{
              fontSize: '1rem',
              fontWeight: '400',
              color: '#475569',
              lineHeight: '1.65',
              marginBottom: '2.2rem',
              maxWidth: '480px',
            }}
          >
            {companyOverviewData.description}
          </p>

          <Link href="/downloads" style={{ textDecoration: 'none' }}>
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.85rem',
                backgroundColor: '#3f4770',
                color: '#ffffff',
                padding: '0.9rem 2.2rem',
                borderRadius: '0px', // Sharp rectangular style (no radius)
                fontSize: '0.88rem',
                fontWeight: '700',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(63, 71, 112, 0.25)',
                transition: 'background-color 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2d3454';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3f4770';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>{companyOverviewData.buttonText}</span>
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
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3f4770"
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
        @media (max-width: 900px) {
          .about-brochure-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 2.5rem !important;
          }
          .about-brochure-grid > div {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}

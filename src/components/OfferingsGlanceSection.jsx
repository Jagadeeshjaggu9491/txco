'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OfferingsGlanceSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { x: -60, opacity: 0 },
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

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { x: 60, opacity: 0 },
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
        backgroundColor: '#f2f6fc', // Light cool blue-tint background matching reference screenshot
        padding: '5.5rem 2rem',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '4rem 5rem',
          alignItems: 'center',
        }}
        className="offerings-grid"
      >
        {/* Left Column: Brochure Image */}
        <div
          ref={imageRef}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="/images/home-offering.png"
            alt="TXCO Safety Sealing and Attachment Solutions Brochure"
            style={{
              maxWidth: '360px',
              width: '100%',
              height: 'auto',
              maxHeight: '450px',
              objectFit: 'contain',
              borderRadius: '4px',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
            }}
          />
        </div>

        {/* Right Column: Title, Paragraph & CTA Button */}
        <div
          ref={contentRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <h2
            style={{
              fontFamily: "'Open Sans', -apple-system, sans-serif",
              fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              fontWeight: '600',
              color: '#3b4674',
              lineHeight: '1.25',
              marginBottom: '1.4rem',
            }}
          >
            Our Offerings at a Glance
          </h2>

          <p
            style={{
              fontSize: '1.02rem',
              fontWeight: '400',
              color: '#475569',
              lineHeight: '1.65',
              marginBottom: '2.4rem',
              maxWidth: '480px',
            }}
          >
            Get to know our signature products, customer-centric solutions, and certifications through this brief overview of our company.
          </p>

          <Link href="/downloads" style={{ textDecoration: 'none' }}>
            <button
              style={{
                padding: '0.85rem 2rem',
                backgroundColor: '#3b4674',
                color: '#ffffff',
                fontSize: '0.88rem',
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
              <span>READ BROCHURE</span>
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
          .offerings-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center !important;
          }
          .offerings-grid > div {
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}

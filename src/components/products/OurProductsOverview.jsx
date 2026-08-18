'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { mainProductCategories } from '@/data/productsData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OurProductsOverview() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const btnRef = useRef(null);

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

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' }
        );
      }

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.2'
        );
      }

      if (cardsRef.current.length > 0) {
        tl.fromTo(
          cardsRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.18,
            ease: 'power3.out',
          },
          '-=0.3'
        );
      }

      if (btnRef.current) {
        tl.fromTo(
          btnRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
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
        backgroundColor: '#f2f6fc', // Light cool grey/blue background matching screenshot 2
        padding: '4.5rem 2rem 5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        {/* Top Badge matching Screenshot 2 */}
        <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
          <span
            ref={badgeRef}
            style={{
              display: 'inline-block',
              padding: '0.4rem 1.4rem',
              backgroundColor: '#ffffff',
              border: '1px solid #d1d5db',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: '700',
              color: '#64748b',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)',
            }}
          >
            OUR PRODUCTS
          </span>
        </div>

        {/* Heading Title matching Screenshot 2 */}
        <h2
          ref={headingRef}
          style={{
            fontFamily: "'Open Sans', -apple-system, sans-serif",
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: '600',
            color: '#1d2744',
            textAlign: 'center',
            maxWidth: '920px',
            margin: '0 auto 3.5rem auto',
            lineHeight: '1.25',
            letterSpacing: '-0.01em',
          }}
        >
          Don’t let demanding sealing requirements become an engineering challenge.
        </h2>

        {/* 3 Product Cards Grid matching Screenshot 2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '3.5rem',
          }}
          className="our-products-grid"
        >
          {mainProductCategories.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                ref={addToCardsRef}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '1.2rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  minHeight: '350px',
                  transition:
                    'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#3b4674';
                  e.currentTarget.style.boxShadow =
                    '0 16px 32px rgba(37, 50, 88, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow =
                    '0 4px 14px rgba(0, 0, 0, 0.04)';
                }}
              >
                {/* Product Image Preview Box */}
                <div
                  style={{
                    width: '100%',
                    height: '185px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.2rem',
                    border: '1px solid #f1f5f9',
                    backgroundImage: `
                      linear-gradient(45deg, #f1f5f9 25%, transparent 25%),
                      linear-gradient(-45deg, #f1f5f9 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, #f1f5f9 75%),
                      linear-gradient(-45deg, transparent 75%, #f1f5f9 75%)
                    `,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '0.8rem',
                    }}
                    onError={(e) => {
                      e.currentTarget.src = item.fallbackImage;
                    }}
                  />
                </div>

                {/* Card Content & Arrow Button */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <div style={{ flexGrow: 1 }}>
                    <h3
                      style={{
                        fontFamily: "'Open Sans', -apple-system, sans-serif",
                        fontSize: '0.98rem',
                        fontWeight: '700',
                        color: '#1d2744',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        marginBottom: '0.4rem',
                        lineHeight: '1.35',
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.86rem',
                        fontWeight: '400',
                        color: '#64748b',
                        margin: 0,
                        lineHeight: '1.45',
                      }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Dark Navy Arrow Button matching screenshot */}
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      backgroundColor: '#3b4674',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 3px 8px rgba(59, 70, 116, 0.25)',
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <polyline points="13 5 20 12 13 19" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Contact Our Experts Button matching Screenshot 2 */}
        <div style={{ textAlign: 'center' }}>
          <Link
            ref={btnRef}
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: '#3b4674',
              color: '#ffffff',
              padding: '0.95rem 2.2rem',
              borderRadius: '6px',
              fontSize: '0.88rem',
              fontWeight: '700',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(59, 70, 116, 0.3)',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2c3558';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3b4674';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>CONTACT OUR EXPERTS</span>
            <div
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <polyline points="13 5 20 12 13 19" />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .our-products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .our-products-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

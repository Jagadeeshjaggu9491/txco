'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { ChevronLeft } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { rtjSubProducts, rtjTabContent } from '@/data/productsData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RingTypeJointPage() {
  const [activeTab, setActiveTab] = useState('applications');
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const listRef = useRef(null);

  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const subProducts = rtjSubProducts;
  const tabContent = rtjTabContent;

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 }
        );
      }

      if (cardsRef.current.length > 0) {
        tl.fromTo(
          cardsRef.current,
          { opacity: 0, y: 40 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, x: -15 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
      );
    }
  }, [activeTab]);

  return (
    <>
      <Header />
      <main>
        {/* Top Product Cards Section matching screenshot */}
        <section
          ref={sectionRef}
          style={{
            width: '100%',
            backgroundColor: '#f4f3fe', // Lavender cool background matching screenshot
            padding: '3.5rem 2rem 4.5rem 2rem',
          }}
        >
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            {/* Breadcrumb Navigation matching screenshot */}
            <div style={{ marginBottom: '1.5rem' }}>
              <Link
                href="/products/gaskets-kits-seals"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: '#3b4674',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s ease',
                }}
              >
                <ChevronLeft size={16} strokeWidth={2.8} />
                <span>GASKETS</span>
              </Link>
            </div>

            {/* Main Page Title matching screenshot */}
            <h1
              ref={titleRef}
              style={{
                fontFamily: "'Open Sans', -apple-system, sans-serif",
                fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)',
                fontWeight: '600',
                color: '#3b4674',
                letterSpacing: '0.01em',
                marginBottom: '3.5rem',
              }}
            >
              Ring Type Joint (RTJ)
            </h1>

            {/* 2 Sub-Product Cards Grid matching screenshot */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2.2rem',
                maxWidth: '820px',
              }}
              className="rtj-cards-grid"
            >
              {subProducts.map((item) => (
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
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      minHeight: '320px',
                      transition:
                        'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.borderColor = '#114680';
                      e.currentTarget.style.boxShadow =
                        '0 14px 30px rgba(5, 44, 88, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.boxShadow =
                        '0 4px 14px rgba(0, 0, 0, 0.03)';
                    }}
                  >
                    {/* Image Preview Container */}
                    <div
                      style={{
                        width: '100%',
                        height: '180px',
                        backgroundColor: '#f8fafc',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.2rem',
                        border: '1px solid #f1f5f9',
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
                          e.currentTarget.src = '/images/home-products.png';
                        }}
                      />
                    </div>

                    {/* Card Content & Arrow Badge */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        gap: '1rem',
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontFamily:
                              "'Open Sans', -apple-system, sans-serif",
                            fontSize: '0.96rem',
                            fontWeight: '700',
                            color: '#052C58',
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
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Dark Navy Circular Arrow Badge */}
                      <div
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '50%',
                          backgroundColor: '#114680',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: '0 3px 8px rgba(17, 70, 128, 0.25)',
                        }}
                      >
                        <svg
                          width="15"
                          height="15"
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
          </div>
        </section>

        {/* Bottom Overview & Applications/Benefits Section on Pure White Background */}
        <section
          style={{
            width: '100%',
            backgroundColor: '#ffffff',
            padding: '4.5rem 2rem 5rem 2rem',
          }}
        >
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            {/* Description Paragraph matching screenshot */}
            <p
              style={{
                fontSize: '0.98rem',
                fontWeight: '400',
                color: '#475569',
                lineHeight: '1.7',
                marginBottom: '3rem',
              }}
            >
              TXCO Sealing Products takes pride in helping our customers find the right metallic gasket for any{' '}
              <a
                href="/industries"
                style={{
                  color: '#114680',
                  textDecoration: 'underline',
                  fontWeight: '600',
                }}
              >
                industry
              </a>{' '}
              application. To ensure your order is ready for immediate shipment, we stock an extensive range of{' '}
              <a
                href="/products/gaskets-kits-seals/ring-type-joint/details"
                style={{
                  color: '#114680',
                  textDecoration: 'underline',
                  fontWeight: '500',
                }}
              >
                ring type joint (RTJ) gasket
              </a>{' '}
              sizes and materials in our facilities all over the world. You can also rely on us for best-in-class delivery of special gasket sizes and shapes that are manufactured in accordance with API 6A, API 17D and ASME B16.20 specifications.
            </p>

            {/* Applications / Benefits Tabs Header */}
            <div
              style={{
                display: 'flex',
                gap: '2.5rem',
                borderBottom: '1.5px solid #e2e8f0',
                marginBottom: '2rem',
              }}
            >
              <button
                onClick={() => setActiveTab('applications')}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0.6rem 0.2rem 0.8rem 0.2rem',
                  fontSize: '0.92rem',
                  fontWeight: '800',
                  letterSpacing: '0.08em',
                  color: activeTab === 'applications' ? '#052C58' : '#94a3b8',
                  borderBottom:
                    activeTab === 'applications'
                      ? '3px solid #052C58'
                      : '3px solid transparent',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                  textTransform: 'uppercase',
                  marginBottom: '-1.5px',
                }}
              >
                APPLICATIONS
              </button>

              <button
                onClick={() => setActiveTab('benefits')}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0.6rem 0.2rem 0.8rem 0.2rem',
                  fontSize: '0.92rem',
                  fontWeight: '800',
                  letterSpacing: '0.08em',
                  color: activeTab === 'benefits' ? '#052C58' : '#94a3b8',
                  borderBottom:
                    activeTab === 'benefits'
                      ? '3px solid #052C58'
                      : '3px solid transparent',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                  textTransform: 'uppercase',
                  marginBottom: '-1.5px',
                }}
              >
                BENEFITS
              </button>
            </div>

            {/* Clean Bullet Points List Content */}
            <ul
              ref={listRef}
              style={{
                listStyleType: 'disc',
                paddingLeft: '1.2rem',
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {tabContent[activeTab].map((text, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    color: '#334155',
                    lineHeight: '1.65',
                  }}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Product Assortment & Contact Section */}
        <ContactSection />
      </main>
      <Footer />

      <style jsx>{`
        @media (max-width: 768px) {
          .rtj-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

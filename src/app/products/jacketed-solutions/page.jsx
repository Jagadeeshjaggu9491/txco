'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { ChevronLeft } from 'lucide-react';

const jacketedProducts = [
  {
    id: 'metal-jacketed',
    title: 'METAL JACKETED GASKETS',
    subtitle: 'High-temperature sealing for heat exchangers and pressure vessels',
    image: '/images/products/industrial-gaskets/kammprofile-gaskets.png',
    href: '/contact',
  },
  {
    id: 'corrugated-jacketed',
    title: 'CORRUGATED JACKETED GASKETS',
    subtitle: 'Resilient corrugated metal design with filler core for cyclic pressure',
    image: '/images/products/industrial-gaskets/sprial-wound-gaskets.png',
    href: '/contact',
  },
  {
    id: 'flat-jacketed',
    title: 'FLAT JACKETED GASKETS',
    subtitle: 'Smooth jacket construction for narrow flange surfaces and valves',
    image: '/images/products/industrial-gaskets/ring-type-joint.png',
    href: '/contact',
  },
];

export default function JacketedSolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Top Product Cards Section */}
        <section
          style={{
            width: '100%',
            backgroundColor: '#f2f6fc',
            padding: '3.5rem 2rem 5.5rem 2rem',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            {/* Breadcrumb Navigation */}
            <div style={{ marginBottom: '1.2rem' }}>
              <Link
                href="/products"
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
                }}
              >
                <ChevronLeft size={16} strokeWidth={2.8} />
                <span>PRODUCTS</span>
              </Link>
            </div>

            <h1
              style={{
                fontFamily: "'Inter', -apple-system, sans-serif",
                fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)',
                fontWeight: '600',
                color: '#3b4674',
                letterSpacing: '0.01em',
                marginBottom: '3.5rem',
              }}
            >
              Jacketed Solutions
            </h1>

            {/* 3-Column Product Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2.2rem',
              }}
              className="products-grid"
            >
              {jacketedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '16px',
                      padding: '1.2rem',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      minHeight: '340px',
                      transition:
                        'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.borderColor = '#3b4674';
                      e.currentTarget.style.boxShadow =
                        '0 14px 30px rgba(37, 50, 88, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.boxShadow =
                        '0 4px 12px rgba(0, 0, 0, 0.03)';
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '190px',
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
                          e.currentTarget.src = '/images/home-offering.png';
                        }}
                      />
                    </div>

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
                            fontFamily:
                              "'Inter', -apple-system, sans-serif",
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
                          {item.subtitle}
                        </p>
                      </div>

                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: '#3b4674',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: '0 2px 8px rgba(59, 70, 116, 0.25)',
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

        <ContactSection />
      </main>

      <style jsx>{`
        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <Footer />
    </>
  );
}

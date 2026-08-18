'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import productsData from '@/data/industrialGaskets.json';
import { ChevronLeft } from 'lucide-react';

export default function IndustrialGasketsPage() {
  return (
    <>
      <Header />
      
      {/* 1. TOP PRODUCTS SECTION with Light Cool Grey Background matching screenshot */}
      <section
        style={{
          width: '100%',
          backgroundColor: '#f2f6fc', // Cool light grey background matching screenshot
          padding: '3.5rem 2rem 5.5rem 2rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Breadcrumb Navigation matching screenshot */}
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
                transition: 'color 0.2s ease',
              }}
            >
              <ChevronLeft size={16} strokeWidth={2.8} />
              <span>PRODUCTS</span>
            </Link>
          </div>

          {/* Main Page Title matching screenshot */}
          <h1
            style={{
              fontFamily: "'Open Sans', -apple-system, sans-serif",
              fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)',
              fontWeight: '600',
              color: '#052C58',
              letterSpacing: '0.01em',
              marginBottom: '3.5rem',
            }}
          >
            Industrial Gaskets, Kits, & Seals
          </h1>

          {/* 3-Column Product Cards Grid matching screenshot */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2.2rem',
            }}
            className="gaskets-grid"
          >
            {productsData.map((item) => (
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
                    transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = '#114680';
                    e.currentTarget.style.boxShadow = '0 14px 30px rgba(5, 44, 88, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.03)';
                  }}
                >
                  {/* Top Product Image Preview Box */}
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
                        e.currentTarget.src = '/images/home-products.png';
                      }}
                    />
                  </div>

                  {/* Card Bottom Details */}
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

                    {/* Circular Dark Navy Arrow Badge matching screenshot */}
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: '#114680',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 2px 8px rgba(17, 70, 128, 0.25)',
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

      {/* 2. MIDDLE SECTION: Industrial Sealing Products Info Cards on Pure White Background */}
      <section
        style={{
          width: '100%',
          backgroundColor: '#ffffff', // Pure white background
          padding: '5rem 2rem 5rem 2rem',
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {/* Header Title & Paragraph */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontFamily: "'Open Sans', -apple-system, sans-serif",
                fontSize: 'clamp(1.6rem, 2.6vw, 2.3rem)',
                fontWeight: '600',
                color: '#052C58',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '1.4rem',
              }}
            >
              INDUSTRIAL SEALING PRODUCTS
            </h2>
            <p
              style={{
                fontSize: '0.98rem',
                fontWeight: '400',
                color: '#475569',
                maxWidth: '920px',
                margin: '0 auto',
                lineHeight: '1.68',
              }}
            >
              At TXCO Sealing Products, we are a leading manufacturer of high-performance industrial sealing solutions, with a commitment to delivering custom-engineered products that meet the rigorous demands of the industries we serve. We specialize in designing, manufacturing and supplying a comprehensive range of precision sealing components for critical applications across the oil & gas, petrochemical, power and heavy-engineering sectors. Headquartered in the industrial hub of Hyderabad, India, our highly automated and integrated operations meet the most demanding national and international standards in design, engineering, manufacture and testing.
            </p>
          </div>

          {/* 3 Lavender Tint Content Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
            {/* Card 1: GASKETS */}
            <div
              style={{
                backgroundColor: '#f4f3fe',
                borderRadius: '20px',
                padding: '2.5rem 3rem',
                border: '1px solid rgba(17, 70, 128, 0.15)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
              }}
              className="info-card-box"
            >
              <h3
                style={{
                  fontFamily: "'Open Sans', -apple-system, sans-serif",
                  fontSize: '1.45rem',
                  fontWeight: '600',
                  color: '#052C58',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                GASKETS
              </h3>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#475569',
                  lineHeight: '1.65',
                  marginBottom: '1.5rem',
                }}
              >
                Precision-engineered sealing solutions for demanding industrial applications. Our gasket range includes Ring Type Joints, Spiral Wound Gaskets, Kammprofile Gaskets, Non-Metallic Gaskets, Gasket Sheets and Flange Insulation Kits. Designed for reliable sealing performance across high-pressure, high-temperature and critical service environments.
              </p>
              <div style={{ fontSize: '0.94rem', color: '#475569', lineHeight: '1.6' }}>
                <strong style={{ color: '#052C58', letterSpacing: '0.06em' }}>PRODUCTS:</strong><br />
                Ring Type Joints (R, RX, BX) • Spiral Wound (R, RIR, CG, CGI) • Kammprofile • Non-Metallic Gaskets • Gasket Sheets • Flange Insulation Kits
              </div>
            </div>

            {/* Card 2: JACKETED SOLUTIONS */}
            <div
              style={{
                backgroundColor: '#f4f3fe',
                borderRadius: '20px',
                padding: '2.5rem 3rem',
                border: '1px solid rgba(17, 70, 128, 0.15)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
              }}
              className="info-card-box"
            >
              <h3
                style={{
                  fontFamily: "'Open Sans', -apple-system, sans-serif",
                  fontSize: '1.45rem',
                  fontWeight: '600',
                  color: '#052C58',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                JACKETED SOLUTIONS
              </h3>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#475569',
                  lineHeight: '1.65',
                  marginBottom: '1.5rem',
                }}
              >
                Reliable sealing solutions designed for demanding temperature, pressure and process conditions. Our Metal Jacketed Gaskets combine metallic construction with suitable filler materials to provide dependable sealing performance. Available in corrugated and flat jacket configurations for a range of industrial applications.
              </p>
              <div style={{ fontSize: '0.94rem', color: '#475569', lineHeight: '1.6' }}>
                <strong style={{ color: '#052C58', letterSpacing: '0.06em' }}>PRODUCTS:</strong><br />
                Metal Jacketed Gaskets • Corrugated Jacketed Gaskets • Flat Jacketed Gaskets
              </div>
            </div>

            {/* Card 3: SPECIALIZED & CUSTOM SOLUTIONS */}
            <div
              style={{
                backgroundColor: '#f4f3fe',
                borderRadius: '20px',
                padding: '2.5rem 3rem',
                border: '1px solid rgba(17, 70, 128, 0.15)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
              }}
              className="info-card-box"
            >
              <h3
                style={{
                  fontFamily: "'Open Sans', -apple-system, sans-serif",
                  fontSize: '1.45rem',
                  fontWeight: '600',
                  color: '#052C58',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                SPECIALIZED & CUSTOM SOLUTIONS
              </h3>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#475569',
                  lineHeight: '1.65',
                  marginBottom: '1.5rem',
                }}
              >
                Engineered sealing and protection solutions for applications where standard products are not enough. TXCO provides specialty gaskets and customized configurations, including Lens, Delta, IX and Bridgeman designs, along with protective coatings, pipeline insulation solutions and custom groove configurations.
              </p>
              <div style={{ fontSize: '0.94rem', color: '#475569', lineHeight: '1.6' }}>
                <strong style={{ color: '#052C58', letterSpacing: '0.06em' }}>SOLUTIONS:</strong><br />
                Special & Custom Gaskets • Protective Coatings • Pipeline Insulation Kits • Custom Groove Configurations • Specialty Gaskets
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DISCOVER OUR ENGINEERED SOLUTIONS SECTION on White Background */}
      <section
        style={{
          width: '100%',
          backgroundColor: '#ffffff', // Pure white background
          padding: '5rem 2rem 5rem 2rem',
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Open Sans', -apple-system, sans-serif",
              fontSize: 'clamp(1.6rem, 2.6vw, 2.3rem)',
              fontWeight: '600',
              color: '#052C58',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: '3.5rem',
            }}
          >
            DISCOVER OUR ENGINEERED SOLUTIONS
          </h2>

          {/* 4 Square Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem 1.5rem',
            }}
            className="engineered-cards-grid"
          >
            {[
              { title: 'PRECISION GASKETS', iconSrc: '/images/icons/industries/Renewable Energy.png' },
              { title: 'CUSTOM ENGINEERING', iconSrc: '/images/icons/industries/Power Generation.png' },
              { title: 'SPECIALTY SEALING', iconSrc: '/images/icons/industries/Oil and Gas.png' },
              { title: 'PROTECTIVE SOLUTIONS', iconSrc: '/images/icons/industries/EPC.png' },
            ].map((card, cIdx) => (
              <div
                key={cIdx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    border: '1.5px solid #114680',
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
                    e.currentTarget.style.borderColor = '#052C58';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(5, 44, 88, 0.14)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#114680';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.03)';
                  }}
                >
                  <img
                    src={card.iconSrc}
                    alt={card.title}
                    style={{
                      maxHeight: '75%',
                      maxWidth: '75%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    lineHeight: '1.3',
                  }}
                >
                  {card.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Section with Upward Overflowing Image */}
      <ContactSection />

      <style jsx>{`
        @media (max-width: 1024px) {
          .gaskets-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.8rem !important;
          }
          .engineered-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem 1.5rem !important;
          }
        }
        @media (max-width: 600px) {
          .gaskets-grid {
            grid-template-columns: 1fr !important;
          }
          .engineered-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .info-card-box {
            padding: 1.8rem 1.4rem !important;
          }
        }
      `}</style>
      <Footer />
    </>
  );
}

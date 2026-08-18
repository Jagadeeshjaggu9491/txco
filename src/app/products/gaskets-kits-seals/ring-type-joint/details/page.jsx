'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { ChevronLeft, Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const sidebarItems = [
  { id: 'ring-joint-gaskets', title: 'RING JOINT GASKETS' },
  { id: 'kammprofile-rtj', title: 'KAMMPROFILE RING TYPE JOINT (RTJ)' },
];

const detailsData = {
  'ring-joint-gaskets': [
    {
      id: 'bridgeman-393',
      title: 'BRIDGEMAN (STYLE 393)',
      description:
        'The Bridgeman gasket is a pressure-activated gasket for use on pressure vessel heads and valve bonnets for pressures of 1500 psi (10 MPa) and above. The cross section of the gasket is such that internal pressure creates a self-energized seal between the ring and containing surface. Bridgeman gaskets are frequently silver plated or lead plated, providing a softer surface and minimizing the force required to flow the gasket metal into the flange surface.',
    },
    {
      id: 'bx-390',
      title: 'BX (STYLE 390)',
      description:
        'The BX ring gasket differs from the standard oval or octagonal shape since it is square in cross section and tapers in each corner. These metal ring gaskets can only be used in API 6A BX flanges. BX is suitable for pressures up to 20,000 psi. Standard sizes are stocked in low carbon steel, 304 and 316.',
    },
    {
      id: 'r-394-395',
      title: 'R (STYLE 394 & 395 - OVAL & OCTAGONAL)',
      description:
        'The R ring joint gasket is available in oval and octagonal cross-sections. Style R ring joint gaskets are designed for pressures up to 5,000 psi in accordance with API 6A and ASME B16.20 specifications. Suitable for standard ring groove flanges.',
    },
    {
      id: 'rx-391',
      title: 'RX (STYLE 391)',
      description:
        'The RX ring gasket is a pressure-energized ring joint gasket designed for pressures up to 5,000 psi. Style RX gaskets are designed to fit the same groove design as standard Style R ring joint gaskets, making them interchangeable, while delivering superior seating performance.',
    },
    {
      id: 'delta-ix',
      title: 'DELTA & IX SPECIAL PROFILES',
      description:
        'Custom pressure-energized metal gaskets manufactured for high-pressure subsea equipment, valve bonnets, and specialized flange assemblies under API 17D and custom customer specifications.',
    },
  ],
  'kammprofile-rtj': [
    {
      id: 'kammprofile-r',
      title: 'KAMMPROFILE STYLE R (BASIC)',
      description:
        'Style R Kammprofile gasket consists of a serrated metal core with soft sealing layers (Graphite, PTFE, or Mica) applied to both faces. Provides high sealing integrity under low seating stress.',
    },
    {
      id: 'kammprofile-cg',
      title: 'KAMMPROFILE STYLE CG (WITH OUTER GUIDE RING)',
      description:
        'Style CG features an integrated solid outer guide ring for accurate centering on standard raised face and flat face flanges.',
    },
    {
      id: 'kammprofile-cgi',
      title: 'KAMMPROFILE STYLE CGI (WITH INNER & OUTER RING)',
      description:
        'Style CGI includes an inner ring and outer guide ring, preventing inner ring blowout under severe thermal shock, pressure cycling, and vacuum service.',
    },
    {
      id: 'kammprofile-rir',
      title: 'KAMMPROFILE STYLE RIR (WITH INNER RING)',
      description:
        'Style RIR utilizes an integral inner ring to protect the serrated metal core from corrosive media and turbulent flow inside heat exchanger nozzles and vessels.',
    },
  ],
};

function DetailsContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'ring-joint-gaskets';
  const [activeTab, setActiveTab] = useState(
    detailsData[initialTab] ? initialTab : 'ring-joint-gaskets'
  );

  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, [activeTab]);

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>
        <section
          style={{
            width: '100%',
            padding: '3.5rem 2rem 5rem 2rem',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Top Breadcrumb */}
            <div style={{ marginBottom: '1.2rem' }}>
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
                }}
              >
                <ChevronLeft size={16} strokeWidth={2.8} />
                <span>GASKETS</span>
              </Link>
            </div>

            {/* Page Title */}
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
              Ring Type Joint (RTJ)
            </h1>

            {/* Split Two-Column Layout */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '300px 1fr',
                gap: '4rem',
                alignItems: 'start',
              }}
              className="details-split-grid"
            >
              {/* Left Sidebar Navigation matching screenshot */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2.5rem',
                  position: 'sticky',
                  top: '100px',
                }}
              >
                {/* Navigation Items List */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.4rem',
                  }}
                >
                  {sidebarItems.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          textAlign: 'left',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem',
                          cursor: 'pointer',
                          fontFamily: "'Open Sans', -apple-system, sans-serif",
                          fontSize: '0.92rem',
                          fontWeight: isActive ? '800' : '600',
                          color: isActive ? '#052C58' : '#64748b',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          lineHeight: '1.4',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        <span>{item.title}</span>
                        {isActive && (
                          <Play
                            size={12}
                            fill="#052C58"
                            color="#052C58"
                            style={{ flexShrink: 0 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Contact Our Experts Button matching user figure (rectangular sharp style, positioned lower) */}
                <div style={{ marginTop: '5.5rem' }}>
                  <Link
                    href="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      backgroundColor: '#114680',
                      color: '#ffffff',
                      padding: '0.9rem 1.2rem',
                      borderRadius: '0px', // Sharp rectangular style
                      fontSize: '0.82rem',
                      fontWeight: '700',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap', // Ensures text stays strictly on a single line!
                      boxShadow: '0 4px 12px rgba(17, 70, 128, 0.2)',
                      transition: 'background-color 0.2s ease, transform 0.2s ease',
                      width: '100%',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#052C58';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#114680';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span style={{ whiteSpace: 'nowrap' }}>CONTACT OUR EXPERTS</span>
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
                        stroke="#114680"
                        strokeWidth="2.8"
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

              {/* Right Content Panel matching screenshot */}
              <div
                ref={contentRef}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.8rem',
                }}
              >
                {detailsData[activeTab].map((block) => (
                  <div
                    key={block.id}
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: '1px solid #edf2f7',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                    }}
                  >
                    {/* Header Bar with Light Lavender Blue Background matching screenshot */}
                    <div
                      style={{
                        backgroundColor: '#f4f3fe',
                        padding: '0.9rem 1.4rem',
                        borderBottom: '1px solid rgba(17, 70, 128, 0.12)',
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Open Sans', -apple-system, sans-serif",
                          fontSize: '0.94rem',
                          fontWeight: '800',
                          color: '#052C58',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          margin: 0,
                        }}
                      >
                        {block.title}
                      </h3>
                    </div>

                    {/* Content Text Block */}
                    <div
                      style={{
                        backgroundColor: '#ffffff',
                        padding: '1.4rem 1.4rem',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '0.94rem',
                          fontWeight: '400',
                          color: '#475569',
                          lineHeight: '1.65',
                          margin: 0,
                        }}
                      >
                        {block.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Contact Section */}
        <ContactSection />
      </main>

      <style jsx>{`
        @media (max-width: 900px) {
          .details-split-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
      <Footer />
    </>
  );
}

export default function RingTypeJointDetailsPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '80vh', padding: '5rem', textAlign: 'center' }}>Loading...</div>}>
      <DetailsContent />
    </Suspense>
  );
}

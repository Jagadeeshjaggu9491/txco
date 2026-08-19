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
        {/* Top Product Cards Section */}
        <section
          ref={sectionRef}
          className="txco-section txco-section-lavender"
          style={{ padding: '3.5rem 2rem 4.5rem 2rem' }}
        >
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            {/* Breadcrumb Navigation */}
            <div style={{ marginBottom: '1.5rem' }}>
              <Link
                href="/products/gaskets-kits-seals"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: 'var(--steel-blue)',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'color var(--transition-fast)',
                }}
              >
                <ChevronLeft size={16} strokeWidth={2.8} />
                <span>GASKETS</span>
              </Link>
            </div>

            {/* Page Title */}
            <h1
              ref={titleRef}
              className="section-title"
              style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', marginBottom: '3.5rem' }}
            >
              Ring Type Joint
            </h1>

            {/* 2-Column Product Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2.5rem',
                maxWidth: '880px',
                margin: '0 auto',
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
                    className="product-overview-card"
                    style={{ minHeight: '340px' }}
                  >
                    {/* Top Image Preview Box */}
                    <div className="product-img-box" style={{ height: '190px' }}>
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
                          e.currentTarget.src = '/images/products/industrial-gaskets/ring-type-joint.png';
                        }}
                      />
                    </div>

                    {/* Bottom Details with Arrow Badge */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem' }}>
                      <div style={{ flexGrow: 1 }}>
                        <h3 className="product-card-title">
                          {item.title}
                        </h3>

                        <p className="product-card-desc">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Circular Dark Navy Arrow Badge */}
                      <div className="product-arrow-badge" style={{ width: '32px', height: '32px' }}>
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

        {/* Bottom Tabbed Content Section on Pure White Background */}
        <section className="txco-section txco-section-light" style={{ padding: '4.5rem 2rem 5.5rem 2rem' }}>
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            {/* 2 Filter Tabs matching screenshot */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.2rem',
                marginBottom: '3rem',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '1rem',
              }}
            >
              <button
                onClick={() => setActiveTab('applications')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.05rem',
                  fontWeight: activeTab === 'applications' ? '700' : '500',
                  color: activeTab === 'applications' ? 'var(--primary-navy)' : 'var(--text-muted)',
                  borderBottom: activeTab === 'applications' ? '2.5px solid var(--primary-navy)' : '2.5px solid transparent',
                  paddingBottom: '0.8rem',
                  marginBottom: '-1.1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  transition: 'all var(--transition-fast)',
                }}
              >
                Applications
              </button>

              <button
                onClick={() => setActiveTab('benefits')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.05rem',
                  fontWeight: activeTab === 'benefits' ? '700' : '500',
                  color: activeTab === 'benefits' ? 'var(--primary-navy)' : 'var(--text-muted)',
                  borderBottom: activeTab === 'benefits' ? '2.5px solid var(--primary-navy)' : '2.5px solid transparent',
                  paddingBottom: '0.8rem',
                  marginBottom: '-1.1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  transition: 'all var(--transition-fast)',
                }}
              >
                Features & Benefits
              </button>
            </div>

            {/* Tab Body List Content with Bullet Points */}
            <div
              style={{
                backgroundColor: 'var(--bg-light-surface)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem',
                border: '1px solid var(--border-light)',
              }}
            >
              <ul
                ref={listRef}
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                }}
              >
                {tabContent[activeTab].map((text, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.9rem',
                      fontSize: '0.96rem',
                      color: 'var(--text-body)',
                      lineHeight: '1.6',
                    }}
                  >
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--slate-blue)',
                        marginTop: '0.5rem',
                        flexShrink: 0,
                      }}
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Global Contact Section */}
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

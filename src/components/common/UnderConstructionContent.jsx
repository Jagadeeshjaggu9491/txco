'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import DiscoverEngineeredSolutions from '@/components/products/DiscoverEngineeredSolutions';
import IndustrialSealingProducts from '@/components/products/IndustrialSealingProducts';
import { Hammer, HardHat, ArrowRight, Home, Package, PhoneCall, FileText } from 'lucide-react';

export default function UnderConstructionContent({ title = 'PAGE UNDER CONSTRUCTION', pageName = '' }) {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '85vh' }}>
        {/* Top Hero Banner */}
        <PageHero
          title={title}
          subtitle="We are actively enhancing this section with updated engineering datasheets, dimensional standards, and technical specifications."
          bgImage="/images/banner/txco-page-banner.avif"
          bgPosition="center bottom"
        />

        {/* Under Construction Notice Container */}
        <section style={{ padding: '4.5rem 2rem 5.5rem 2rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'rgba(5, 44, 88, 0.08)',
                color: '#052C58',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
              }}
            >
              <HardHat size={40} strokeWidth={1.8} />
            </div>

            <span
              style={{
                display: 'inline-block',
                fontSize: '0.78rem',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#384576',
                backgroundColor: '#f1f5f9',
                padding: '0.35rem 0.9rem',
                borderRadius: '20px',
                marginBottom: '1rem',
              }}
            >
              COMING SOON
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-family-heading, "Inter", sans-serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: '600',
                color: '#052C58',
                marginBottom: '1rem',
                lineHeight: 1.25,
              }}
            >
              {pageName ? `${pageName} is Under Development` : 'This Section is Under Development'}
            </h2>

            <p
              style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.7,
                maxWidth: '640px',
                margin: '0 auto 2.5rem auto',
              }}
            >
              Our engineering team is preparing complete technical literature, material specifications, and interactive resources for this section. In the meantime, explore our live inventory or speak directly with our application engineers.
            </p>

            {/* Quick Action Navigation Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <Link href="/stock-list" style={{ textDecoration: 'none' }}>
                <button type="button" className="txco-btn txco-btn-steel">
                  <span>LIVE STOCK LIST</span>
                  <div className="txco-btn-icon-circle">
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

              <Link href="/products" style={{ textDecoration: 'none' }}>
                <button type="button" className="txco-btn txco-btn-steel" style={{ background: '#f1f5f9', color: '#334155' }}>
                  <span>ALL PRODUCTS</span>
                  <div className="txco-btn-icon-circle" style={{ background: '#e2e8f0' }}>
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

              <Link href="/catalogues" style={{ textDecoration: 'none' }}>
                <button type="button" className="txco-btn txco-btn-steel" style={{ background: '#f1f5f9', color: '#334155' }}>
                  <span>DOWNLOAD CATALOGUES</span>
                  <div className="txco-btn-icon-circle" style={{ background: '#e2e8f0' }}>
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

              <Link href="/" style={{ textDecoration: 'none' }}>
                <button type="button" className="txco-btn txco-btn-steel" style={{ background: '#f1f5f9', color: '#334155' }}>
                  <span>RETURN HOME</span>
                  <div className="txco-btn-icon-circle" style={{ background: '#e2e8f0' }}>
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
        </section>

        {/* Supporting Global Solutions */}
        <IndustrialSealingProducts />
        <DiscoverEngineeredSolutions />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer
      style={{
        width: '100%',
        backgroundColor: '#111625', // Exact dark charcoal/navy background matching reference screenshot
        color: '#ffffff',
        padding: '4.5rem 2rem 2.2rem 2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.3fr repeat(5, 1fr)',
          gap: '2.2rem',
          paddingBottom: '4rem',
        }}
        className="footer-grid-container"
      >
        {/* Left Column: Brand Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Link href="/" style={{ display: 'inline-block' }}>
            <img
              src="/images/logo/logo.png"
              alt="TXCO Sealing Products Logo"
              style={{
                height: '56px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'brightness(0) invert(1)', // Pure crisp white logo rendering on dark background
              }}
            />
          </Link>
        </div>

        {/* Column 1: PRODUCTS */}
        <div>
          <h4
            style={{
              fontSize: '0.82rem',
              fontWeight: '700',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
              marginBottom: '1.2rem',
            }}
          >
            PRODUCTS
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li><Link href="/products" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>All Products</Link></li>
            <li><Link href="/products/gaskets-kits-seals" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Gaskets, Kits, and Seals</Link></li>
            <li><Link href="/products/hoses-expansion" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Hoses and Expansion</Link></li>
            <li><Link href="/products/joints" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Joints</Link></li>
            <li><Link href="/products/fasteners" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Fasteners</Link></li>
          </ul>
        </div>

        {/* Column 2: INDUSTRIES */}
        <div>
          <h4
            style={{
              fontSize: '0.82rem',
              fontWeight: '700',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
              marginBottom: '1.2rem',
            }}
          >
            INDUSTRIES
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li><Link href="/industries" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>All Industries</Link></li>
            <li><Link href="/industries/chemical" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Chemical</Link></li>
            <li><Link href="/industries/energy" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Energy</Link></li>
            <li><Link href="/industries/manufacturing" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Manufacturing</Link></li>
            <li><Link href="/industries/metals-mining" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Metals and Mining</Link></li>
          </ul>
        </div>

        {/* Column 3: SERVICES */}
        <div>
          <h4
            style={{
              fontSize: '0.82rem',
              fontWeight: '700',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
              marginBottom: '1.2rem',
            }}
          >
            SERVICES
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li><Link href="/services" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>All Services</Link></li>
            <li><Link href="/services/reverse" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Reverse</Link></li>
            <li><Link href="/services/engineering" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Engineering</Link></li>
            <li><Link href="/services/field-support" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Field Support</Link></li>
            <li><Link href="/services/training" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Training</Link></li>
          </ul>
        </div>

        {/* Column 4: RESOURCES */}
        <div>
          <h4
            style={{
              fontSize: '0.82rem',
              fontWeight: '700',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
              marginBottom: '1.2rem',
            }}
          >
            RESOURCES
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li><Link href="/resources/blog" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Blog</Link></li>
            <li><Link href="/resources/faqs" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>FAQs</Link></li>
            <li><Link href="/resources/news" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>News</Link></li>
            <li><Link href="/resources/library" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Resource</Link></li>
            <li><Link href="/resources/library" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Library</Link></li>
          </ul>
        </div>

        {/* Column 5: ABOUT US */}
        <div>
          <h4
            style={{
              fontSize: '0.82rem',
              fontWeight: '700',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
              marginBottom: '1.2rem',
            }}
          >
            ABOUT US
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li><Link href="/about/careers" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Careers</Link></li>
            <li><Link href="/about/company" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Company</Link></li>
            <li><Link href="/about/history" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>History</Link></li>
            <li><Link href="/about/locations" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Locations</Link></li>
            <li><Link href="/about/sustainability" style={{ color: '#cbd5e1', fontSize: '0.88rem', transition: 'color 0.2s' }}>Sustainability</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Notice */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '1.8rem',
          textAlign: 'center',
          fontSize: '0.78rem',
          color: '#94a3b8',
        }}
      >
        © Copyright TXCO {currentYear}. All Rights Reserved.
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .footer-grid-container {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}

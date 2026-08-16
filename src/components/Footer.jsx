'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const currentYear = 2026;
  const footerRef = useRef(null);
  const columnsRef = useRef([]);

  columnsRef.current = [];

  const addToColumnRefs = (el) => {
    if (el && !columnsRef.current.includes(el)) {
      columnsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      if (columnsRef.current.length > 0) {
        gsap.fromTo(
          columnsRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{
        width: '100%',
        backgroundColor: '#16161e', // Dark charcoal black matching reference screenshot
        color: '#ffffff',
        padding: '4.5rem 2rem 2.5rem 2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
        {/* Top Header Bar: Brand Logo (Left) & Social Media Box (Right) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '4.5rem',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          {/* Brand Logo */}
          <Link href="/" style={{ display: 'inline-block' }}>
            <img
              src="/images/logo/logo.png"
              alt="TXCO Sealing Products Logo"
              style={{
                height: '56px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'brightness(0) invert(1)',
              }}
            />
          </Link>

          {/* Social Icons Container Box matching screenshot */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              padding: '0.65rem 1.2rem',
              borderRadius: '4px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {/* YouTube Icon */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              style={{ color: '#ffffff', display: 'flex', alignItems: 'center', transition: 'opacity 0.2s' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: '#ffffff', display: 'flex', alignItems: 'center', transition: 'opacity 0.2s' }}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* 6-Column Navigation Grid matching reference screenshot */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '2.5rem 1.8rem',
            marginBottom: '4.5rem',
          }}
          className="footer-grid-container"
        >
          {/* Column 1: INDUSTRIES */}
          <div ref={addToColumnRefs}>
            <h4
              style={{
                fontSize: '0.86rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '1.2rem',
                display: 'inline-block',
                borderBottom: '1.5px solid rgba(255, 255, 255, 0.2)',
                paddingBottom: '0.35rem',
              }}
            >
              INDUSTRIES
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><Link href="/industries" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>All Industries</Link></li>
              <li><Link href="/industries/chemical" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Chemical</Link></li>
              <li><Link href="/industries/energy" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Energy</Link></li>
              <li><Link href="/industries/epc" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Engineering, Procurement & Construction</Link></li>
              <li><Link href="/industries/manufacturing" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Manufacturing</Link></li>
              <li><Link href="/industries/metals-mining" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Metals and Mining</Link></li>
              <li><Link href="/industries/transportation" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Transportation</Link></li>
              <li><Link href="/industries/water" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Water and Wastewater</Link></li>
            </ul>
          </div>

          {/* Column 2: PRODUCTS */}
          <div ref={addToColumnRefs}>
            <h4
              style={{
                fontSize: '0.86rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '1.2rem',
                display: 'inline-block',
                borderBottom: '1.5px solid rgba(255, 255, 255, 0.2)',
                paddingBottom: '0.35rem',
              }}
            >
              PRODUCTS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><Link href="/products" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>All Products</Link></li>
              <li><Link href="/products/gaskets-kits-seals" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Gaskets, Kits, and Seals</Link></li>
              <li><Link href="/products/hoses-expansion" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Hoses and Expansion Joints</Link></li>
              <li><Link href="/products/fasteners" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Fasteners</Link></li>
            </ul>
          </div>

          {/* Column 3: SERVICES */}
          <div ref={addToColumnRefs}>
            <h4
              style={{
                fontSize: '0.86rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '1.2rem',
                display: 'inline-block',
                borderBottom: '1.5px solid rgba(255, 255, 255, 0.2)',
                paddingBottom: '0.35rem',
              }}
            >
              SERVICES
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><Link href="/services" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>All Services</Link></li>
              <li><Link href="/services/reverse" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Reverse Engineering</Link></li>
              <li><Link href="/services/field-support" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Field Support</Link></li>
              <li><Link href="/services/recommendations" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Gasket Recommendations</Link></li>
              <li><Link href="/services/training" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Training</Link></li>
              <li><Link href="/services/value" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Value-Added Benefits</Link></li>
            </ul>
          </div>

          {/* Column 4: RESOURCES */}
          <div ref={addToColumnRefs}>
            <h4
              style={{
                fontSize: '0.86rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '1.2rem',
                display: 'inline-block',
                borderBottom: '1.5px solid rgba(255, 255, 255, 0.2)',
                paddingBottom: '0.35rem',
              }}
            >
              RESOURCES
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><Link href="/resources/blog" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Blog</Link></li>
              <li><Link href="/resources/faqs" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>FAQs</Link></li>
              <li><Link href="/resources/news" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>News</Link></li>
              <li><Link href="/resources/library" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Resource Library</Link></li>
              <li><Link href="/resources/tar" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Industrial Turnaround (TAR)</Link></li>
              <li><Link href="/resources/solutions" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Solutions</Link></li>
            </ul>
          </div>

          {/* Column 5: ABOUT US */}
          <div ref={addToColumnRefs}>
            <h4
              style={{
                fontSize: '0.86rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '1.2rem',
                display: 'inline-block',
                borderBottom: '1.5px solid rgba(255, 255, 255, 0.2)',
                paddingBottom: '0.35rem',
              }}
            >
              ABOUT US
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><Link href="/about/careers" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Careers</Link></li>
              <li><Link href="/about/history" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Company History</Link></li>
              <li><Link href="/about/innovation" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Innovation</Link></li>
              <li><Link href="/about/overview" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>TXCO Overview</Link></li>
              <li><Link href="/about/locations" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Locations</Link></li>
              <li><Link href="/about/sustainability" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>Sustainability</Link></li>
            </ul>
          </div>

          {/* Column 6: CUSTOMER LOGIN */}
          <div ref={addToColumnRefs}>
            <h4
              style={{
                fontSize: '0.86rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '1.2rem',
                display: 'inline-block',
                borderBottom: '1.5px solid rgba(255, 255, 255, 0.2)',
                paddingBottom: '0.35rem',
              }}
            >
              CUSTOMER LOGIN
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><Link href="/login/catalogs" style={{ color: '#94a3b8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>E Catalogs</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar matching screenshot */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '0.5rem',
            fontSize: '0.85rem',
            color: '#94a3b8',
            flexWrap: 'wrap',
          }}
        >
          <span>© Copyright TXCO {currentYear}. All Rights Reserved. TXCO Sealing Products, LLC</span>
          <Link href="/terms" style={{ color: '#cbd5e1', textDecoration: 'underline', marginLeft: '0.4rem' }}>
            Terms and Conditions
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
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

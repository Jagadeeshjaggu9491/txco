'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Globe, Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ width: '100%', background: '#ffffff', borderBottom: '1px solid #e5e7eb', position: 'relative', zIndex: 100 }}>
      {/* Top Utility Bar */}
      <div
        style={{
          borderBottom: '1px solid #f0f0f0',
          fontSize: '0.82rem',
          color: '#333333',
          padding: '0.4rem 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.8rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#333', fontWeight: '500' }}>Home</Link>
            <Link href="/contact" style={{ color: '#333', fontWeight: '500' }}>Contact</Link>
            <Link href="/downloads" style={{ color: '#333', fontWeight: '500' }}>Downloads</Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}>
              <Globe size={14} color="#555" />
              <span>Germany</span>
            </div>
            <span style={{ color: '#ddd' }}>|</span>
            <Link href="/search" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer', textDecoration: 'none', color: '#333' }}>
              <Search size={14} color="#555" />
              <span>Search</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation & Logo */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0.9rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Main Nav Links (Desktop & Tablet landscape) */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.8rem',
          }}
          className="main-nav-desktop"
        >
          <Link href="/industries" style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1a1f2c' }}>
            Industries
          </Link>
          <Link href="/products" style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1a1f2c' }}>
            Products
          </Link>
          <Link href="/services" style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1a1f2c' }}>
            Services
          </Link>
          <Link href="/resources" style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1a1f2c' }}>
            Resources
          </Link>
          <Link href="/about" style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1a1f2c' }}>
            About Us
          </Link>
          <Link href="/login" style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1a1f2c' }}>
            Customer Login
          </Link>
        </nav>

        {/* Mobile / Tablet Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.3rem' }}
          className="mobile-nav-toggle"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={26} color="#1a1f2c" /> : <Menu size={26} color="#1a1f2c" />}
        </button>

        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/images/logo/logo.png"
            alt="TXCO Sealing Products Logo"
            className="header-logo-img"
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>
      </div>

      {/* Mobile / Tablet Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#ffffff',
            borderBottom: '2px solid #e5e7eb',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
            padding: '1.2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            zIndex: 90,
          }}
        >
          <Link href="/industries" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.05rem', fontWeight: '600', color: '#1a1f2c', padding: '0.3rem 0' }}>
            Industries
          </Link>
          <Link href="/products" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.05rem', fontWeight: '600', color: '#1a1f2c', padding: '0.3rem 0' }}>
            Products
          </Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.05rem', fontWeight: '600', color: '#1a1f2c', padding: '0.3rem 0' }}>
            Services
          </Link>
          <Link href="/resources" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.05rem', fontWeight: '600', color: '#1a1f2c', padding: '0.3rem 0' }}>
            Resources
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.05rem', fontWeight: '600', color: '#1a1f2c', padding: '0.3rem 0' }}>
            About Us
          </Link>
          <Link href="/login" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.05rem', fontWeight: '600', color: '#0066ff', padding: '0.3rem 0' }}>
            Customer Login
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 960px) {
          .main-nav-desktop {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: block !important;
          }
        }
        @media (max-width: 576px) {
          .header-logo-img {
            height: 38px !important;
          }
        }
      `}</style>
    </header>
  );
}

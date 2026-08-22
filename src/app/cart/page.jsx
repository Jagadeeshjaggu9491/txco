'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { ShoppingCart, ArrowRight, ShieldCheck, FileText, PhoneCall } from 'lucide-react';

export default function CartPage() {
  return (
    <>
      <Header />
      <main>
        {/* Top Hero Banner matching About Us page hero */}
        <section className="about-hero-section">
          <div className="about-hero-container">
            <div className="about-hero-content">
              <h1 className="about-hero-title">
                QUOTATION CART (RFQ)
              </h1>
              <p className="about-hero-subtitle">
                Review your selected gasket profiles, flange specs, and valve sealing items before submitting for instant engineering quotation.
              </p>
            </div>
          </div>
        </section>

        {/* Cart Content Section */}
        <section className="cart-page-section">
          <div className="cart-container">
            <div className="cart-empty-box">
              <div className="cart-empty-icon">
                <ShoppingCart size={36} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-family-heading)', fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-heading)', margin: 0 }}>
                Your Quotation Cart is Empty
              </h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', maxWidth: '540px', lineHeight: '1.6', margin: 0 }}>
                You haven&apos;t added any industrial gaskets, flanges, or sealing components to your RFQ cart yet. Explore our catalog to add items.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
                <Link href="/products" style={{ textDecoration: 'none' }}>
                  <button className="txco-btn txco-btn-primary">
                    <span>Explore Products Catalog</span>
                    <ArrowRight size={16} />
                  </button>
                </Link>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <button className="txco-btn txco-btn-steel">
                    <PhoneCall size={16} />
                    <span>Talk to Sales Engineer</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Global Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import IndustrialSealingProducts from '@/components/products/IndustrialSealingProducts';
import DiscoverEngineeredSolutions from '@/components/products/DiscoverEngineeredSolutions';
import productsData from '@/data/industrialGaskets.json';
import { ChevronLeft } from 'lucide-react';

export default function IndustrialGasketsPage() {
  return (
    <>
      <Header />

      {/* 1. TOP PRODUCTS SECTION */}
      <section className="txco-section txco-section-cool-grey" style={{ padding: '3.5rem 2rem 5.5rem 2rem' }}>
        <div className="txco-container">
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
                color: 'var(--steel-blue)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'color var(--transition-fast)',
              }}
            >
              <ChevronLeft size={16} strokeWidth={2.8} />
              <span>PRODUCTS</span>
            </Link>
          </div>

          {/* Main Page Title */}
          <h1 className="section-title" style={{ marginBottom: '3.5rem' }}>
            Industrial Gaskets, Kits, & Seals
          </h1>

          {/* 3-Column Product Cards Grid */}
          <div className="grid-3-col">
            {productsData.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="product-overview-card" style={{ minHeight: '340px' }}>
                  {/* Top Product Image Preview Box */}
                  <div className="product-img-box" style={{ height: '190px' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        padding: '0',
                      }}
                      onError={(e) => {
                        e.currentTarget.src = '/images/home-products.png';
                      }}
                    />
                  </div>

                  {/* Card Bottom Details */}
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

      {/* 2. MIDDLE SECTION: Industrial Sealing Products Info Cards Component */}
      <IndustrialSealingProducts />

      {/* 3. DISCOVER OUR ENGINEERED SOLUTIONS SECTION Component */}
      <DiscoverEngineeredSolutions />

      {/* 4. Contact Section */}
      <ContactSection />
      <Footer />
    </>
  );
}

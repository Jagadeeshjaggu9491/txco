'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import IndustrialSealingProducts from '@/components/products/IndustrialSealingProducts';
import DiscoverEngineeredSolutions from '@/components/products/DiscoverEngineeredSolutions';
import { ChevronLeft } from 'lucide-react';

export default function SubcategoryListPage({ categoryData }) {
  if (!categoryData) return null;

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>
        {/* Top Subcategories Section */}
        <section className="txco-section txco-section-cool-grey" style={{ padding: '3.5rem 2rem 5.5rem 2rem' }}>
          <div className="txco-container">
            {/* Breadcrumb Navigation */}
            <div style={{ marginBottom: '1.2rem' }}>
              <Link
                href={categoryData.parentHref || '/products'}
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
                <span>{categoryData.parentTitle || 'PRODUCTS'}</span>
              </Link>
            </div>

            {/* Main Page Title */}
            <h1 className="section-title" style={{ marginBottom: '3.5rem' }}>
              {categoryData.title}
            </h1>

            {/* Flexbox Subcategory Cards: exactly 3 per row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2rem',
              }}
              className="products-flex-container"
            >
              {categoryData.items.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="product-card-flex-item"
                  style={{
                    flex: '0 0 calc(33.333% - 1.35rem)',
                    maxWidth: 'calc(33.333% - 1.35rem)',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                  }}
                >
                  <div className="product-overview-card" style={{ width: '100%', minHeight: '340px' }}>
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
                          {item.subtitle || item.description}
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

        {/* 2. Industrial Sealing Products Info Cards Component */}
        <IndustrialSealingProducts />

        {/* 3. Discover Our Engineered Solutions Component */}
        <DiscoverEngineeredSolutions />

        {/* 4. Global Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

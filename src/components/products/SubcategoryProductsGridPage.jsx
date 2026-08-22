'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import IndustrialSealingProducts from '@/components/products/IndustrialSealingProducts';
import DiscoverEngineeredSolutions from '@/components/products/DiscoverEngineeredSolutions';
import { ChevronLeft } from 'lucide-react';

export default function SubcategoryProductsGridPage({
  categorySlug,
  categoryTitle,
  categoryHref,
  subcategoryData,
}) {
  if (!subcategoryData) return null;

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>
        {/* Top Subcategory Products Section */}
        <section className="txco-section txco-section-cool-grey" style={{ padding: '3.5rem 2rem 5.5rem 2rem' }}>
          <div className="txco-container">
            {/* Breadcrumb Navigation back to Parent Category */}
            <div style={{ marginBottom: '1.2rem' }}>
              <Link
                href={categoryHref || `/products/${categorySlug}`}
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
                <span>{categoryTitle || 'GASKETS'}</span>
              </Link>
            </div>

            {/* Subcategory Page Heading & Description */}
            <div style={{ maxWidth: '900px', marginBottom: '3.5rem' }}>
              <h1 className="section-title" style={{ marginBottom: '0.8rem' }}>
                {subcategoryData.name || subcategoryData.title}
              </h1>
              {subcategoryData.description && (
                <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: '1.65', margin: 0 }}>
                  {subcategoryData.description}
                </p>
              )}
            </div>

            {/* Flexbox Products Grid: 3 cards per row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2rem',
              }}
              className="products-flex-container"
            >
              {subcategoryData.products?.map((item) => {
                const detailsHref = `/products/${categorySlug}/${subcategoryData.slug}/details?product=${item.slug || item.id}`;

                return (
                  <Link
                    key={item.id || item.slug}
                    href={detailsHref}
                    className="product-card-flex-item"
                    style={{
                      flex: '0 0 calc(33.333% - 1.35rem)',
                      maxWidth: 'calc(33.333% - 1.35rem)',
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                    }}
                  >
                    <div className="product-overview-card" style={{ width: '100%', minHeight: '350px' }}>
                      {/* Product Image Preview Box */}
                      <div className="product-img-box" style={{ height: '190px' }}>
                        <img
                          src={item.image || '/images/products/industrial-gaskets/ring-type-joint.png'}
                          alt={item.name || item.title}
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

                      {/* Card Content & Circular Arrow Badge */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', marginTop: '1.2rem' }}>
                        <div style={{ flexGrow: 1 }}>
                          {item.standards && (
                            <div style={{ fontSize: '0.74rem', fontWeight: '700', color: '#0369a1', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                              {item.standards}
                            </div>
                          )}

                          <h3 className="product-card-title">
                            {item.name || item.title}
                          </h3>

                          <p className="product-card-desc">
                            {item.description}
                          </p>
                        </div>

                        {/* Circular Dark Navy Arrow Button */}
                        <div className="product-arrow-badge" style={{ width: '34px', height: '34px', flexShrink: 0 }}>
                          <svg
                            width="16"
                            height="16"
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
                );
              })}
            </div>
          </div>
        </section>

        {/* Supporting Global Sections */}
        <IndustrialSealingProducts />
        <DiscoverEngineeredSolutions />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

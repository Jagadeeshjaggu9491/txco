'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { ChevronLeft } from 'lucide-react';
import { specializedProducts } from '@/data/productsData';

export default function SpecializedSolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Top Product Cards Section */}
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
                }}
              >
                <ChevronLeft size={16} strokeWidth={2.8} />
                <span>PRODUCTS</span>
              </Link>
            </div>

            <h1 className="section-title" style={{ marginBottom: '3.5rem' }}>
              Specialized Solutions
            </h1>

            {/* 4-Column Product Cards Grid */}
            <div className="grid-4-col">
              {specializedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="product-overview-card" style={{ minHeight: '340px' }}>
                    {/* Top Image Box */}
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
                          e.currentTarget.src = '/images/home-products.png';
                        }}
                      />
                    </div>

                    {/* Card Content & Action Badge */}
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

        {/* Global Contact CTA Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

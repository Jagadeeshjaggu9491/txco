'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import IndustrialSealingProducts from '@/components/products/IndustrialSealingProducts';
import DiscoverEngineeredSolutions from '@/components/products/DiscoverEngineeredSolutions';
import { ChevronLeft } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SubcategoryListPage({ categoryData }) {
  const containerRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (breadcrumbRef.current) {
        tl.fromTo(
          breadcrumbRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5 }
        );
      }

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.65 },
          '-=0.25'
        );
      }

      if (cardsRef.current.length > 0) {
        tl.fromTo(
          cardsRef.current,
          { opacity: 0, y: 45, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.3'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [categoryData]);

  if (!categoryData) return null;

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>
        {/* Top Subcategories Section */}
        <section
          ref={containerRef}
          className="txco-section txco-section-cool-grey"
          style={{ padding: '3.5rem 2rem 5.5rem 2rem' }}
        >
          <div className="txco-container">
            {/* Breadcrumb Navigation */}
            <div ref={breadcrumbRef} style={{ marginBottom: '1.2rem' }}>
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
            <h1 ref={titleRef} className="section-title" style={{ marginBottom: '3.5rem' }}>
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
                  ref={addToCardsRef}
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
                      <div className="product-arrow-badge">
                        <svg
                          width="18"
                          height="18"
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

        {/* Supporting Global Sections */}
        <IndustrialSealingProducts />
        <DiscoverEngineeredSolutions />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

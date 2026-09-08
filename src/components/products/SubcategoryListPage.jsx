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
              {categoryData.items.map((item) => {
                const isProduct = Boolean(
                  item.href?.includes('/details') ||
                  categoryData.isProducts ||
                  categoryData.id !== 'gaskets'
                );

                return (
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
                    {isProduct ? (
                      /* SINGLE PRODUCT CARD (Transparent background, floating image, Details ribbon) */
                      <div className="single-product-card" style={{ width: '100%' }}>
                        <div className="single-product-img-box">
                          <img
                            src={item.image || '/images/products/industrial-gaskets/ring-type-joint.png'}
                            alt={item.title}
                            onError={(e) => {
                              e.currentTarget.src = '/images/home-products.png';
                            }}
                          />
                        </div>

                        <div className="single-product-card-body">
                          <div>
                            <div className="single-product-action-bar">
                              <span className="single-product-badge-ribbon">Details</span>
                              <span className="single-product-tooltip-pill">{item.title}</span>
                            </div>

                            <h3 className="single-product-title">
                              {item.title}
                            </h3>

                            {item.types ? (
                              <div className="product-card-types-box">
                                <span className="product-card-types-label">Types / Variants</span>
                                <p className="product-card-types-value">
                                  {item.types}
                                </p>
                              </div>
                            ) : null}
                          </div>

                          {/* Bottom Line Accent Design */}
                          <div className="single-product-bottom-line" />
                        </div>
                      </div>
                    ) : (
                      /* CATEGORY OVERVIEW CARD (For category list e.g. Gaskets subcategories) */
                      <div className="category-overview-card" style={{ width: '100%' }}>
                        <div className="category-img-box">
                          <span className="category-ghost-text">
                            {item.title?.split(' ')[0] || 'TXCO'}
                          </span>
                          <img
                            src={item.image}
                            alt={item.title}
                            onError={(e) => {
                              e.currentTarget.src = '/images/home-products.png';
                            }}
                          />
                        </div>

                        <div className="category-card-body">
                          <div>
                            <div className="category-card-action-bar">
                              <span className="category-badge-ribbon">Go to category</span>
                              <span className="category-tooltip-pill">{item.title}</span>
                            </div>

                            <h3 className="category-card-title">
                              {item.title}
                            </h3>

                            {item.types ? (
                              <div className="product-card-types-box">
                                <span className="product-card-types-label">Types / Variants</span>
                                <p className="product-card-types-value">
                                  {item.types}
                                </p>
                              </div>
                            ) : null}
                          </div>

                          {/* Bottom Line Accent Design */}
                          <div className="single-product-bottom-line" />
                        </div>
                      </div>
                    )}
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

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { filterOptions, initialResourcesList } from '@/data/resourcesData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ResourcesGrid() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  // State for interactive filtering
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedProduct, setSelectedProduct] = useState('All Products');
  const [selectedService, setSelectedService] = useState('All Services');
  const [filteredResources, setFilteredResources] = useState(initialResourcesList);

  // Apply filters
  const handleFilter = () => {
    let list = [...initialResourcesList];

    if (selectedType !== 'All Types') {
      list = list.filter((r) => r.type === selectedType);
    }
    if (selectedIndustry !== 'All Industries') {
      list = list.filter((r) => r.industry === selectedIndustry);
    }
    if (selectedProduct !== 'All Products') {
      list = list.filter((r) => r.product === selectedProduct);
    }
    if (selectedService !== 'All Services') {
      list = list.filter((r) => r.service === selectedService);
    }

    setFilteredResources(list);
  };

  const handleClearFilters = () => {
    setSelectedType('All Types');
    setSelectedIndustry('All Industries');
    setSelectedProduct('All Products');
    setSelectedService('All Services');
    setFilteredResources(initialResourcesList);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading entrance animation
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Cards entrance animation
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 40, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.07,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredResources]);

  return (
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '5.5rem 2rem 6.5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        {/* Main Section Heading matching Image 2 */}
        <h2
          ref={headingRef}
          style={{
            fontFamily: "'Open Sans', -apple-system, sans-serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: '500',
            color: '#1e293b',
            marginBottom: '2.5rem',
          }}
        >
          Latest Resources
        </h2>

        {/* Filter Bar Bar matching Image 2 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.2rem',
            marginBottom: '3.5rem',
          }}
          className="resources-filter-bar"
        >
          {/* Left Side: Filter Dropdowns */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.8rem',
            }}
          >
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                color: '#64748b',
                textTransform: 'uppercase',
                marginRight: '0.4rem',
              }}
            >
              FILTER BY:
            </span>

            {/* Select 1: Type */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="resource-select"
            >
              <option value="All Types">Type</option>
              {filterOptions.types
                .filter((t) => t !== 'All Types')
                .map((t, idx) => (
                  <option key={idx} value={t}>
                    {t}
                  </option>
                ))}
            </select>

            {/* Select 2: Industry */}
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="resource-select"
            >
              <option value="All Industries">Industry</option>
              {filterOptions.industries
                .filter((i) => i !== 'All Industries')
                .map((i, idx) => (
                  <option key={idx} value={i}>
                    {i}
                  </option>
                ))}
            </select>

            {/* Select 3: Product */}
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="resource-select"
            >
              <option value="All Products">Product</option>
              {filterOptions.products
                .filter((p) => p !== 'All Products')
                .map((p, idx) => (
                  <option key={idx} value={p}>
                    {p}
                  </option>
                ))}
            </select>

            {/* Select 4: Service */}
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="resource-select"
            >
              <option value="All Services">Service</option>
              {filterOptions.services
                .filter((s) => s !== 'All Services')
                .map((s, idx) => (
                  <option key={idx} value={s}>
                    {s}
                  </option>
                ))}
            </select>
          </div>

          {/* Right Side: FILTER button & CLEAR FILTERS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <button
              onClick={handleFilter}
              style={{
                backgroundColor: '#991b1b', // Crimson red background matching Image 2
                color: '#ffffff',
                border: 'none',
                borderRadius: '0px', // Sharp rectangular style (no radius)
                padding: '0.48rem 1.5rem',
                fontSize: '0.78rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#7f1d1d')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#991b1b')}
            >
              FILTER
            </button>

            <button
              onClick={handleClearFilters}
              style={{
                background: 'none',
                border: 'none',
                color: '#3b4674',
                fontSize: '0.75rem',
                fontWeight: '600',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                padding: '0.4rem 0.2rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#114680')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#3b4674')}
            >
              CLEAR FILTERS
            </button>
          </div>
        </div>

        {/* 3-Column Resource Cards Grid matching Image 2 */}
        {filteredResources.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2.5rem 2rem',
            }}
            className="resources-cards-grid"
          >
            {filteredResources.map((item) => (
              <div
                key={item.id}
                ref={addToCardsRef}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1.5px solid #edf2f7',
                  padding: '1.2rem',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition:
                    'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#cbd5e1';
                  e.currentTarget.style.boxShadow =
                    '0 12px 28px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#edf2f7';
                  e.currentTarget.style.boxShadow =
                    '0 4px 14px rgba(0, 0, 0, 0.03)';
                }}
              >
                {/* Top Image Banner: trusted-partner-red.png or trusted-partner-blue.png */}
                <div style={{ width: '100%', marginBottom: '1.4rem' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '220px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      display: 'block',
                    }}
                    onError={(e) => {
                      e.currentTarget.src = '/images/home-products.png';
                    }}
                  />
                </div>

                {/* Card Footer: Title & Circular Arrow Badge Button */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    paddingTop: '0.4rem',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Open Sans', -apple-system, sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: '700',
                      color: '#1d2744',
                      lineHeight: '1.35',
                      letterSpacing: '0.01em',
                      maxWidth: '220px',
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>

                  <Link href={item.link} style={{ textDecoration: 'none' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: '#3f4770',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'background-color 0.2s ease, transform 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#114680';
                        e.currentTarget.style.transform = 'scale(1.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#3f4770';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
            }}
          >
            <p style={{ fontSize: '1.1rem', color: '#475569', margin: 0 }}>
              No resources found matching the selected filters.
            </p>
            <button
              onClick={handleClearFilters}
              style={{
                marginTop: '1rem',
                backgroundColor: '#3f4770',
                color: '#ffffff',
                border: 'none',
                borderRadius: '0px',
                padding: '0.6rem 1.4rem',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .resource-select {
          background-color: #0b2b48;
          color: #ffffff;
          border: none;
          padding: 0.45rem 1.8rem 0.45rem 0.9rem;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: 0px;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%23ffffff' d='M0 0l5 6 5-6z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.6rem center;
        }

        @media (max-width: 900px) {
          .resources-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 600px) {
          .resources-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .resources-filter-bar {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}

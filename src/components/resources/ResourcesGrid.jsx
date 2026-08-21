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
    <section ref={sectionRef} className="resources-grid-section">
      <div className="resources-grid-container">
        {/* Main Section Heading */}
        <h2 ref={headingRef} className="resources-section-heading">
          Latest Resources
        </h2>

        {/* Filter Bar */}
        <div className="resources-filter-bar">
          {/* Left Side: Filter Dropdowns */}
          <div className="resources-filter-dropdowns">
            <span className="resources-filter-label">
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
          <div className="resources-filter-actions">
            <button
              onClick={handleFilter}
              className="resource-filter-btn"
            >
              FILTER
            </button>

            <button
              onClick={handleClearFilters}
              className="resource-clear-btn"
            >
              CLEAR FILTERS
            </button>
          </div>
        </div>

        {/* 3-Column Resource Cards Grid */}
        {filteredResources.length > 0 ? (
          <div className="resources-cards-grid">
            {filteredResources.map((item) => (
              <div
                key={item.id}
                ref={addToCardsRef}
                className="resource-card"
              >
                {/* Top Image Banner */}
                <div className="resource-card-img-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="resource-card-img"
                    onError={(e) => {
                      e.currentTarget.src = '/images/home-products.png';
                    }}
                  />
                </div>

                {/* Card Footer: Title & Circular Arrow Badge Button */}
                <div className="resource-card-footer">
                  <h3 className="resource-card-title">
                    {item.title}
                  </h3>

                  <Link href={item.link} style={{ textDecoration: 'none' }}>
                    <div className="resource-card-arrow-btn">
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
          <div className="resources-empty-box">
            <p className="resources-empty-text">
              No resources found matching the selected filters.
            </p>
            <button
              onClick={handleClearFilters}
              className="resources-reset-btn"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

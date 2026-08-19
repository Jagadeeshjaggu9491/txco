'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
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
                        padding: '0.8rem',
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

      {/* 2. MIDDLE SECTION: Industrial Sealing Products Info Cards */}
      <section className="txco-section txco-section-light">
        <div className="txco-container-narrow">
          {/* Header Title & Paragraph */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 className="section-title section-title-center">
              INDUSTRIAL SEALING PRODUCTS
            </h2>
            <p className="section-subtitle section-subtitle-center" style={{ maxWidth: '920px' }}>
              At TXCO Sealing Products, we are a leading manufacturer of high-performance industrial sealing solutions, with a commitment to delivering custom-engineered products that meet the rigorous demands of the industries we serve. We specialize in designing, manufacturing and supplying a comprehensive range of precision sealing components for critical applications across the oil & gas, petrochemical, power and heavy-engineering sectors. Headquartered in the industrial hub of Hyderabad, India, our highly automated and integrated operations meet the most demanding national and international standards in design, engineering, manufacture and testing.
            </p>
          </div>

          {/* 3 Lavender Tint Content Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
            {/* Card 1: GASKETS */}
            <div className="info-card-box">
              <h3 className="info-card-title">
                GASKETS
              </h3>
              <p className="info-card-desc">
                Precision-engineered sealing solutions for demanding industrial applications. Our gasket range includes Ring Type Joints, Spiral Wound Gaskets, Kammprofile Gaskets, Non-Metallic Gaskets, Gasket Sheets and Flange Insulation Kits. Designed for reliable sealing performance across high-pressure, high-temperature and critical service environments.
              </p>
              <div style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <strong className="info-card-label">PRODUCTS:</strong><br />
                Ring Type Joints (R, RX, BX) • Spiral Wound (R, RIR, CG, CGI) • Kammprofile • Non-Metallic Gaskets • Gasket Sheets • Flange Insulation Kits
              </div>
            </div>

            {/* Card 2: JACKETED SOLUTIONS */}
            <div className="info-card-box">
              <h3 className="info-card-title">
                JACKETED SOLUTIONS
              </h3>
              <p className="info-card-desc">
                Reliable sealing solutions designed for demanding temperature, pressure and process conditions. Our Metal Jacketed Gaskets combine metallic construction with suitable filler materials to provide dependable sealing performance. Available in corrugated and flat jacket configurations for a range of industrial applications.
              </p>
              <div style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <strong className="info-card-label">PRODUCTS:</strong><br />
                Metal Jacketed Gaskets • Corrugated Jacketed Gaskets • Flat Jacketed Gaskets
              </div>
            </div>

            {/* Card 3: SPECIALIZED & CUSTOM SOLUTIONS */}
            <div className="info-card-box">
              <h3 className="info-card-title">
                SPECIALIZED & CUSTOM SOLUTIONS
              </h3>
              <p className="info-card-desc">
                Engineered sealing and protection solutions for applications where standard products are not enough. TXCO provides specialty gaskets and customized configurations, including Lens, Delta, IX and Bridgeman designs, along with protective coatings, pipeline insulation solutions and custom groove configurations.
              </p>
              <div style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <strong className="info-card-label">SOLUTIONS:</strong><br />
                Special & Custom Gaskets • Protective Coatings • Pipeline Insulation Kits • Custom Groove Configurations • Specialty Gaskets
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DISCOVER OUR ENGINEERED SOLUTIONS SECTION */}
      <section className="txco-section txco-section-light">
        <div className="txco-container-narrow">
          <h2 className="section-title section-title-center" style={{ marginBottom: '3.5rem' }}>
            DISCOVER OUR ENGINEERED SOLUTIONS
          </h2>

          {/* 4 Square Cards Grid */}
          <div className="grid-4-col">
            {[
              { title: 'PRECISION GASKETS', iconSrc: '/images/icons/industries/Renewable Energy.png' },
              { title: 'CUSTOM ENGINEERING', iconSrc: '/images/icons/industries/Power Generation.png' },
              { title: 'SPECIALTY SEALING', iconSrc: '/images/icons/industries/Oil and Gas.png' },
              { title: 'PROTECTIVE SOLUTIONS', iconSrc: '/images/icons/industries/EPC.png' },
            ].map((card, cIdx) => (
              <div
                key={cIdx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div className="solution-square-box">
                  <img
                    src={card.iconSrc}
                    alt={card.title}
                    style={{
                      maxHeight: '75%',
                      maxWidth: '75%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <span className="solution-square-title">
                  {card.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Section */}
      <ContactSection />
      <Footer />
    </>
  );
}

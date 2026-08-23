'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import DiscoverEngineeredSolutions from '@/components/products/DiscoverEngineeredSolutions';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function IndustryDetailsLayout({ industryData }) {
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);
  const contentRef = useRef(null);

  const activeSegment =
    industryData.segments && industryData.segments[activeSegmentIndex]
      ? industryData.segments[activeSegmentIndex]
      : industryData.segments?.[0];

  // Smooth animation when changing segment
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }
      );
    }
  }, [activeSegmentIndex]);

  if (!industryData) return null;

  return (
    <>
      <Header />
      <main className="industry-details-main">
        {/* Top Hero Banner matching About Us / Industry banner */}
        <PageHero
          title={industryData.heroTitle || `${industryData.title.toUpperCase()} SOLUTIONS`}
          subtitle={industryData.subtitle}
          bgImage={industryData.bannerImage || '/images/industry-page-banner-img.avif'}
          bgPosition="center"
        />

        {/* Main Two-Column Industry Layout */}
        <section className="industry-details-section">
          <div className="industry-details-container">
            <div className="industry-details-split-grid">
              {/* Left Sticky Sidebar */}
              <aside className="industry-details-sidebar">
                <div>
                  <Link href="/industries" className="industry-sidebar-breadcrumb">
                    <ChevronLeft size={16} strokeWidth={2.8} />
                    <span>INDUSTRIES</span>
                  </Link>

                  <h2 className="industry-sidebar-title">
                    {industryData.title}
                  </h2>

                  {/* Segments Vertical Menu */}
                  <ul className="industry-sidebar-nav">
                    {industryData.segments?.map((segment, idx) => {
                      const isActive = activeSegmentIndex === idx;

                      return (
                        <li key={segment.id || idx} className="industry-sidebar-nav-item">
                          <button
                            type="button"
                            onClick={() => setActiveSegmentIndex(idx)}
                            className={`industry-sidebar-nav-btn ${isActive ? 'active' : ''}`}
                          >
                            <span>{segment.name}</span>
                            {isActive && (
                              <span className="industry-sidebar-active-arrow">▶</span>
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Contact Our Experts CTA Button */}
                <Link href="/contact" className="industry-sidebar-contact-btn">
                  <span>CONTACT OUR EXPERTS</span>
                  <div className="industry-sidebar-btn-circle">
                    <ArrowRight size={14} strokeWidth={2.6} />
                  </div>
                </Link>
              </aside>

              {/* Right Content Area */}
              <article ref={contentRef} className="industry-content-area">
                {activeSegment && (
                  <>
                    <h1 className="industry-content-heading">
                      {activeSegment.title}
                    </h1>

                    {activeSegment.tagline && (
                      <div className="industry-content-tagline">
                        {activeSegment.tagline}
                      </div>
                    )}

                    {activeSegment.intro && (
                      <p className="industry-content-body-p">
                        {activeSegment.intro}
                      </p>
                    )}

                    {activeSegment.section2Title && (
                      <h3 className="industry-content-subheading">
                        {activeSegment.section2Title}
                      </h3>
                    )}

                    {activeSegment.section2Body && (
                      <p className="industry-content-body-p">
                        {activeSegment.section2Body}
                      </p>
                    )}

                    {activeSegment.whoWeServe && activeSegment.whoWeServe.length > 0 && (
                      <div className="industry-who-we-serve-box">
                        <div className="industry-who-we-serve-title">
                          {activeSegment.whoWeServeTitle || 'Who We Serve'}
                        </div>
                        <ul className="industry-who-we-serve-list">
                          {activeSegment.whoWeServe.map((item, i) => (
                            <li key={i} className="industry-who-we-serve-item">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSegment.conclusionTitle && (
                      <h3 className="industry-content-subheading">
                        {activeSegment.conclusionTitle}
                      </h3>
                    )}

                    {activeSegment.conclusionBody && (
                      <p className="industry-content-body-p">
                        {activeSegment.conclusionBody}
                      </p>
                    )}
                  </>
                )}
              </article>
            </div>
          </div>
        </section>

        {/* Bottom Product Spotlight Section */}
        {industryData.productSpotlight && industryData.productSpotlight.length > 0 && (
          <section className="industry-spotlight-section">
            <div className="industry-spotlight-container">
              <div className="industry-spotlight-header">
                <h2 className="industry-spotlight-title">Product Spotlight</h2>
                <div className="industry-spotlight-nav-controls">
                  <button
                    type="button"
                    className="industry-spotlight-nav-btn"
                    aria-label="Previous Products"
                  >
                    <ChevronLeft size={18} strokeWidth={2.4} />
                  </button>
                  <button
                    type="button"
                    className="industry-spotlight-nav-btn"
                    aria-label="Next Products"
                  >
                    <ChevronRight size={18} strokeWidth={2.4} />
                  </button>
                </div>
              </div>

              <div className="industry-spotlight-grid">
                {industryData.productSpotlight.map((prod) => (
                  <Link
                    key={prod.id}
                    href={prod.href || '/products'}
                    className="industry-spotlight-card"
                  >
                    <div className="industry-spotlight-img-box">
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="industry-spotlight-img"
                        onError={(e) => {
                          e.currentTarget.src = '/images/home-products.png';
                        }}
                      />
                    </div>

                    <div className="industry-spotlight-card-body">
                      <div>
                        <h4 className="industry-spotlight-card-title">{prod.title}</h4>
                        <p className="industry-spotlight-card-specs">{prod.specs}</p>
                      </div>

                      <div className="industry-spotlight-card-arrow">
                        <ArrowRight size={14} strokeWidth={2.5} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Supporting Global Solutions */}
        <DiscoverEngineeredSolutions />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

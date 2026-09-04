'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import DiscoverEngineeredSolutions from '@/components/products/DiscoverEngineeredSolutions';
import { ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react';
import gsap from 'gsap';
import '@/styles/industry-details.css';

export default function IndustryDetailsLayout({ industryData }) {
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);
  const headerBarRef = useRef(null);
  const sidebarRef = useRef(null);
  const contentRef = useRef(null);

  // Sync active segment with URL hash (e.g. #pharmaceutical-fda, #plastics-polymers)
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const hash = window.location.hash.replace('#', '');
        const foundIdx = industryData.segments?.findIndex(
          (seg) => seg.id === hash || seg.slug === hash
        );
        if (foundIdx !== -1 && foundIdx !== undefined) {
          setActiveSegmentIndex(foundIdx);

          // Scroll to the top of the content section so it starts from the top, not the middle
          setTimeout(() => {
            if (headerBarRef.current) {
              const navbarOffset = 90;
              const targetY =
                headerBarRef.current.getBoundingClientRect().top +
                window.pageYOffset -
                navbarOffset;
              window.scrollTo({
                top: Math.max(0, targetY),
                behavior: 'smooth',
              });
            }
          }, 80);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [industryData.segments]);

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

  const handleSelectSegment = (idx, segment) => {
    setActiveSegmentIndex(idx);
    if (typeof window !== 'undefined') {
      if (segment.id) {
        const url = new URL(window.location.href);
        url.hash = segment.id;
        window.history.pushState({}, '', url.toString());
      }

      // Scroll window to starting top position of the content - exactly matching product details behavior
      if (headerBarRef.current) {
        const navbarOffset = 90;
        const targetY =
          headerBarRef.current.getBoundingClientRect().top +
          window.pageYOffset -
          navbarOffset;
        window.scrollTo({
          top: Math.max(0, targetY),
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <>
      <Header />
      {/* Main Container using exact product details class names */}
      <main className="product-details-main">
        {/* Top Hero Banner matching About Us / Industry banner */}
        <PageHero
          title={industryData.heroTitle || `${industryData.title.toUpperCase()} SOLUTIONS`}
          subtitle={industryData.subtitle}
          bgImage={industryData.bannerImage || '/images/industry-page-banner-img.avif'}
          bgPosition="center"
        />

        {/* Main Two-Column Industry Layout using product-details classes */}
        <section className="product-details-section">
          <div className="product-details-container">
            {/* Top Navigation Bar: Breadcrumb on Left, Consultation CTA on Right */}
            <div ref={headerBarRef} className="product-details-header-bar">
              <Link href="/industries" className="product-details-breadcrumb">
                <ChevronLeft size={16} strokeWidth={2.8} />
                <span>ALL INDUSTRIES</span>
              </Link>

              <Link href="/contact" className="product-details-download-btn">
                <span>Request Engineering Consultation</span>
                <div className="product-details-download-icon-circle">
                  <ArrowRight size={13} strokeWidth={2.4} />
                </div>
              </Link>
            </div>

            <div className="product-details-split-grid">
              {/* Left Sticky Sidebar using exact product details sidebar classes */}
              <aside ref={sidebarRef} className="product-details-sidebar">
                <div className="product-sidebar-title-box">
                  <h2 className="product-sidebar-category-title">
                    {industryData.title}
                  </h2>
                </div>

                {/* Segments Vertical Menu */}
                <div className="product-details-nav-list">
                  {industryData.segments?.map((segment, idx) => {
                    const isActive = activeSegmentIndex === idx;

                    return (
                      <button
                        key={segment.id || idx}
                        type="button"
                        onClick={() => handleSelectSegment(idx, segment)}
                        className={`product-details-nav-item ${isActive ? 'active' : ''}`}
                      >
                        <span>{segment.name}</span>
                        {isActive && (
                          <Play
                            size={11}
                            fill="#018f5d"
                            color="#018f5d"
                            style={{ flexShrink: 0 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Contact Our Experts Action Button */}
                <div>
                  <Link href="/contact" className="product-details-contact-btn">
                    <span>CONTACT OUR EXPERTS</span>
                    <div className="product-details-contact-icon-circle">
                      <ArrowRight size={13} color="#114680" strokeWidth={2.8} />
                    </div>
                  </Link>
                </div>
              </aside>

              {/* Right Content Area */}
              <article ref={contentRef} className="industry-content-area">
                {activeSegment && (
                  <>
                    <h1 className="industry-content-heading">
                      {activeSegment.title}
                    </h1>

                    {/* Intro Narrative */}
                    {activeSegment.intro && (
                      <p className="industry-content-body-p">
                        {activeSegment.intro}
                      </p>
                    )}

                    {/* Who We Serve (when present) */}
                    {activeSegment.whoWeServe && activeSegment.whoWeServe.length > 0 && (
                      <div className="industry-who-we-serve-box">
                        <div className="industry-who-we-serve-title">
                          Who We Serve:
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

                    {/* Primary Application Areas */}
                    {activeSegment.primaryApplications && (
                      <div className="industry-app-box">
                        <h3 className="industry-content-subheading">
                          Primary Application Areas
                        </h3>
                        <p className="industry-content-body-p">
                          {activeSegment.primaryApplications}
                        </p>
                      </div>
                    )}

                    {/* Common Flange Types & Standards */}
                    {activeSegment.commonFlanges && activeSegment.commonFlanges.length > 0 && (
                      <div className="industry-spec-block">
                        <h3 className="industry-content-subheading">
                          Common Flange Types & Standards
                        </h3>
                        <div className="industry-spec-list">
                          {activeSegment.commonFlanges.map((flange, fIdx) => (
                            <div key={fIdx} className="industry-spec-card">
                              <div className="industry-spec-card-header">
                                <span className="industry-spec-bullet" />
                                <h4 className="industry-spec-name">{flange.name}</h4>
                              </div>
                              <p className="industry-spec-desc">{flange.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Engineered Gasket & Sealing Selection */}
                    {activeSegment.engineeredGaskets && activeSegment.engineeredGaskets.length > 0 && (
                      <div className="industry-spec-block">
                        <h3 className="industry-content-subheading">
                          Engineered Gasket & Sealing Selection
                        </h3>
                        <div className="industry-spec-list">
                          {activeSegment.engineeredGaskets.map((gasket, gIdx) => (
                            <div key={gIdx} className="industry-spec-card">
                              <div className="industry-spec-card-header">
                                <span className="industry-spec-bullet" />
                                <h4 className="industry-spec-name">{gasket.name}</h4>
                              </div>
                              <p className="industry-spec-desc">{gasket.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
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

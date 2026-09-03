'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import { servicesList } from '@/data/servicesData';
import '@/styles/services.css';
import { ChevronLeft, Play, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServiceDetailClient({ service }) {
  const headerBarRef = useRef(null);
  const sidebarRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (headerBarRef.current) {
        tl.fromTo(
          headerBarRef.current,
          { y: -15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        );
      }

      if (sidebarRef.current) {
        tl.fromTo(
          sidebarRef.current,
          { x: -25, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 },
          '-=0.3'
        );
      }

      if (contentRef.current) {
        tl.fromTo(
          contentRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.4'
        );
      }
    });

    return () => ctx.revert();
  }, [service.slug]);

  return (
    <div className="services-page-wrapper">
      <Header />

      {/* Hero Banner */}
      <PageHero
        title={service.shortTitle.toUpperCase()}
        subtitle={service.cardDesc}
        bgImage="/images/banner/txco-page-banner.avif"
        bgPosition="center bottom"
      />

      {/* Main Container using exact product details class names */}
      <main className="product-details-main">
        <section className="product-details-section">
          <div className="product-details-container">
            {/* Top Navigation Bar: Breadcrumb on Left, Consultation CTA on Right */}
            <div ref={headerBarRef} className="product-details-header-bar">
              <Link href="/services" className="product-details-breadcrumb">
                <ChevronLeft size={16} strokeWidth={2.8} />
                <span>ALL SERVICES</span>
              </Link>

              <Link href="/contact" className="product-details-download-btn">
                <span>Request Engineering Consultation</span>
                <div className="product-details-download-icon-circle">
                  <ArrowRight size={13} strokeWidth={2.4} />
                </div>
              </Link>
            </div>

            {/* Split Two-Column Layout (Left Sidebar, Right Content) */}
            <div className="product-details-split-grid">
              {/* Left Sidebar Navigation using exact product details sidebar classes */}
              <aside ref={sidebarRef} className="product-details-sidebar">
                <div className="product-sidebar-title-box">
                  <h2 className="product-sidebar-category-title">
                    Specialized Services
                  </h2>
                </div>

                {/* Services Navigation List */}
                <div className="product-details-nav-list">
                  {servicesList.map((item) => {
                    const isActive = item.slug === service.slug;

                    return (
                      <Link
                        key={item.id}
                        href={`/services/${item.slug}`}
                        className={`product-details-nav-item ${isActive ? 'active' : ''}`}
                      >
                        <span>{item.shortTitle}</span>
                        {isActive && (
                          <Play
                            size={11}
                            fill="#018f5d"
                            color="#018f5d"
                            style={{ flexShrink: 0 }}
                          />
                        )}
                      </Link>
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

              {/* Right Content Panel: Strictly Client Provided Content */}
              <div ref={contentRef} className="service-detail-main">
                <span className="services-eyebrow">
                  SPECIALIZED SERVICE {service.num}
                </span>
                <h1 className="service-detail-title">{service.title}</h1>

                {/* Full Scope Items Provided by Client */}
                <div className="service-features-wrap">
                  {service.items &&
                    service.items.map((item, idx) => (
                      <div key={idx} className="service-feature-item">
                        <h2 className="service-feature-title">
                          <span className="service-feature-title-bullet" />
                          {item.title}
                        </h2>
                        <p className="service-feature-desc">{item.desc}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

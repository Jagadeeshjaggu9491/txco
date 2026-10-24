'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OfferingsGlanceSection() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const bandRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      if (bandRef.current) {
        gsap.fromTo(
          bandRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.85,
            delay: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="offerings-glance-section">
      {/* Full-width div with background color spanning edge-to-edge */}
      <div ref={bandRef} className="offerings-fullwidth-band">
        {/* Centered row container: max-width 1400px */}
        <div className="offerings-row-container">
          {/* Left: Dark Navy Card with negative vertical margins breaking out of the band */}
          <div ref={cardRef} className="offerings-navy-card">
            {/* Background Brand Watermark */}
            <div className="offerings-navy-watermark-wrapper" aria-hidden="true">
              <img
                src="/images/logo/txco-mark-right-white.png"
                alt=""
                className="offerings-navy-watermark-img"
              />
            </div>

            {/* Navy Card Content */}
            <div className="offerings-navy-content">
              <h2 className="offerings-navy-title">
                Sealing Solutions<br />
                for Every Industry
              </h2>

              <p className="offerings-navy-desc">
                Give us a call, send an email, or fill out a short inquiry — let&apos;s complete your project together.
              </p>

              <Link href="/contact" className="offerings-pill-btn offerings-btn-contact">
                <span>CONTACT US</span>
                <svg className="offerings-btn-chevron" width="7" height="12" viewBox="0 0 7 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 1L6 6L1 11" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Brochure Image & Text / Download Column */}
          <div className="offerings-brochure-container">
            <div className="offerings-brochure-img-col">
              <img
                src="/images/catalogues/txco-brochure-cover-img.avif"
                alt="TXCO Offerings at a Glance Brochure"
                className="offerings-brochure-img"
              />
            </div>

            <div className="offerings-brochure-text-col">
              <h3 className="offerings-brochure-title">Our Offerings at a Glance</h3>

              <p className="offerings-brochure-desc">
                Get to know our signature products, customer-centric solutions, and certifications through this brief overview of our company.
              </p>

              <Link href="/catalogues" className="offerings-pill-btn offerings-btn-download">
                <span>DOWNLOAD</span>
                <svg className="offerings-btn-chevron" width="7" height="12" viewBox="0 0 7 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 1L6 6L1 11" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

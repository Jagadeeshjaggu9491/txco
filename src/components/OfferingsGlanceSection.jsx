'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { offeringsGlanceData } from '@/data/homeData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OfferingsGlanceSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
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
  }, []);

  return (
    <section ref={sectionRef} className="offerings-section">
      <div className="offerings-grid">
        {/* Left Column: Brochure Image */}
        <div ref={imageRef} className="offerings-image-col">
          <img
            src={offeringsGlanceData.image}
            alt="TXCO Safety Sealing and Attachment Solutions Brochure"
            className="offerings-img"
          />
        </div>

        {/* Right Column: Title, Paragraph & CTA Button */}
        <div ref={contentRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h2 className="section-title" style={{ color: '#3b4674' }}>
            {offeringsGlanceData.heading}
          </h2>

          <p className="section-subtitle" style={{ marginBottom: '2.4rem', maxWidth: '480px' }}>
            {offeringsGlanceData.description}
          </p>

          <Link href={offeringsGlanceData.href} style={{ textDecoration: 'none' }}>
            <button className="txco-btn txco-btn-steel">
              <span>{offeringsGlanceData.buttonText}</span>
              <div className="txco-btn-icon-circle">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b4674"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="13 5 20 12 13 19" />
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

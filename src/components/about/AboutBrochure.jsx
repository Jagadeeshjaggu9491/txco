'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { companyOverviewData } from '@/data/aboutData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutBrochure() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left image entrance
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { x: -50, opacity: 0 },
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

      // Right text entrance
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { x: 50, opacity: 0 },
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
    <section ref={sectionRef} className="about-brochure-section">
      <div className="about-brochure-grid">
        {/* Left Column: Brochure Preview Cover Image */}
        <div ref={leftColRef} className="about-brochure-img-col">
          <img
            src={companyOverviewData.image}
            alt="TXCO Company Overview Brochure"
            className="about-brochure-img"
            onError={(e) => {
              e.currentTarget.src = '/images/home-products.png';
            }}
          />
        </div>

        {/* Right Column: Company Overview Title, Description & CTA Button */}
        <div ref={rightColRef}>
          <h2 className="about-brochure-title">
            {companyOverviewData.title}
          </h2>

          <p className="about-brochure-desc">
            {companyOverviewData.description}
          </p>

          <Link href="/catalogues" style={{ textDecoration: 'none' }}>
            <button className="about-brochure-btn">
              <span>{companyOverviewData.buttonText}</span>
              <div className="about-brochure-btn-circle">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3f4770"
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

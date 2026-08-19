'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactSectionData } from '@/data/homeData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left column slide from left
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Right image slide from right & top
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
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
    <section ref={sectionRef} className="home-contact-section">
      <div className="home-contact-grid">
        {/* Left Column: Description & Direct Contact Details */}
        <div ref={leftColRef} style={{ zIndex: 12 }}>
          <p className="home-contact-desc">
            {contactSectionData.description}
          </p>

          <div className="home-contact-divider" />

          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <p className="home-contact-phone-label">
              Just call us on{' '}
              <span className="home-contact-phone-val">
                {contactSectionData.phone}
              </span>
            </p>

            <a
              href={`mailto:${contactSectionData.email}`}
              className="home-contact-email-val"
            >
              {contactSectionData.email}
            </a>
          </div>
        </div>

        {/* Right Column: Upward Overflowing Product Image */}
        <div ref={rightColRef} className="home-contact-img-col">
          <img
            src={contactSectionData.image}
            alt="TXCO Sealing Products Assortment"
            className="home-contact-img"
          />
        </div>
      </div>
    </section>
  );
}

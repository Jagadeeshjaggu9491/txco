'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        backgroundColor: '#f2f6fc', // Light cool blue-tint background matching reference screenshot
        padding: '5rem 2rem 4rem 2rem',
        color: '#1d2744',
        position: 'relative',
        overflow: 'visible', // Allows image to overflow upwards into section above
        zIndex: 20,
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr',
          alignItems: 'center',
          gap: '3rem',
          position: 'relative',
          overflow: 'visible',
        }}
        className="contact-section-grid"
      >
        {/* Left Column: Description & Direct Contact Details */}
        <div ref={leftColRef} style={{ zIndex: 12 }}>
          <p
            style={{
              fontFamily: "'Open Sans', -apple-system, sans-serif",
              fontSize: '1.1rem',
              fontWeight: '400',
              color: '#334155',
              lineHeight: '1.65',
              marginBottom: '1.8rem',
              maxWidth: '520px',
            }}
          >
            From high-performance gaskets, hoses and fasteners to custom-engineered sealing solutions, TXCO helps customers solve demanding applications with reliable products, technical expertise and responsive support.
          </p>

          {/* Subtle horizontal divider */}
          <div
            style={{
              width: '100%',
              maxWidth: '500px',
              height: '1px',
              backgroundColor: '#cbd5e1',
              margin: '1.8rem 0',
            }}
          />

          {/* Contact Details matching screenshot */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <p
              style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#334155',
                margin: 0,
              }}
            >
              Just call us on{' '}
              <span style={{ fontWeight: '700', color: '#1d2744', fontSize: '1.35rem' }}>
                +91 6302 152 938
              </span>
            </p>

            <a
              href="mailto:info@txco.co"
              style={{
                fontSize: '1.15rem',
                fontWeight: '500',
                color: '#1d2744',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              info@txco.co
            </a>
          </div>
        </div>

        {/* Right Column: Upward Overflowing Product Image into Section Above */}
        <div
          ref={rightColRef}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            marginTop: '-140px', // Prominent upward overflow extending into section above
            zIndex: 25,
          }}
          className="contact-img-wrapper"
        >
          <img
            src="/images/contact-img.png"
            alt="TXCO Sealing Products Assortment"
            style={{
              width: '100%',
              maxWidth: '680px',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 18px 36px rgba(0, 0, 0, 0.14))',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .contact-section-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .contact-img-wrapper {
            margin-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

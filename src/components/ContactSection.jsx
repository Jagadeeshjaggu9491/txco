'use client';

import React, { useEffect, useRef } from 'react';
import { Phone, Mail } from 'lucide-react';
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

      // Right image slide from right
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { x: 50, opacity: 0, scale: 0.96 },
          {
            x: 0,
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
        backgroundColor: '#ffffff',
        padding: '5.5rem 2rem',
        color: '#253258',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          alignItems: 'center',
          gap: '4rem',
        }}
        className="contact-section-grid"
      >
        {/* Left Column: Description & Direct Contact Details */}
        <div ref={leftColRef}>
          <p
            style={{
              fontFamily: "'Open Sans', -apple-system, sans-serif",
              fontSize: '1.02rem',
              color: '#475569',
              lineHeight: '1.7',
              marginBottom: '2.5rem',
              maxWidth: '460px',
            }}
          >
            From high-performance gaskets, hoses and fasteners to custom-engineered sealing solutions, our team helps customers solve demanding applications with reliable products and responsive support.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Phone Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#344473',
                }}
              >
                <Phone size={28} strokeWidth={1.8} />
              </div>
              <span
                style={{
                  fontFamily: "'Open Sans', -apple-system, sans-serif",
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                  fontWeight: '600',
                  color: '#344473',
                }}
              >
                Just call us on +91 6302 152 938
              </span>
            </div>

            {/* Email Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#344473',
                }}
              >
                <Mail size={28} strokeWidth={1.8} />
              </div>
              <a
                href="mailto:Info@txco.co"
                style={{
                  fontFamily: "'Open Sans', -apple-system, sans-serif",
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                  fontWeight: '600',
                  color: '#344473',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
              >
                Info@txco.co
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Product Image */}
        <div ref={rightColRef} style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="/images/home-products.png"
            alt="TXCO Sealing Products Display"
            style={{
              width: '100%',
              maxWidth: '580px',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .contact-section-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

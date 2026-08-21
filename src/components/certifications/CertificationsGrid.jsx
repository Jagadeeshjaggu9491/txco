'use client';

import React, { useEffect, useRef } from 'react';
import { certificatesList } from '@/data/certificationsData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CertificationsGrid() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.08,
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
        padding: '5.5rem 2rem 6.5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        {/* 3-Column Certificates Grid matching Image 2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3rem 2.2rem',
          }}
          className="certifications-cards-grid"
        >
          {certificatesList.map((item) => (
            <div
              key={item.id}
              ref={addToCardsRef}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              {/* Certificate Image Frame */}
              <div
                style={{
                  width: '100%',
                  backgroundColor: '#ffffff',
                  padding: '0.8rem',
                  borderRadius: '4px',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                  overflow: 'hidden',
                  transition:
                    'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#114680';
                  e.currentTarget.style.boxShadow =
                    '0 14px 30px rgba(5, 44, 88, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow =
                    '0 4px 14px rgba(0, 0, 0, 0.04)';
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                  onError={(e) => {
                    e.currentTarget.src = '/images/home-products.png';
                  }}
                />
              </div>

              {/* Certificate Title Label */}
              <h3
                style={{
                  fontFamily: "'Inter', -apple-system, sans-serif",
                  fontSize: '0.96rem',
                  fontWeight: '600',
                  color: '#1d2744',
                  textAlign: 'center',
                  marginTop: '1rem',
                  lineHeight: '1.35',
                  letterSpacing: '0.01em',
                }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .certifications-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem 1.5rem !important;
          }
        }
        @media (max-width: 550px) {
          .certifications-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

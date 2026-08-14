'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IndustrySolutions() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const rowsRef = useRef([]);

  rowsRef.current = [];

  const addToRowsRef = (el) => {
    if (el && !rowsRef.current.includes(el)) {
      rowsRef.current.push(el);
    }
  };

  const solutions = [
    {
      title: 'SERVICES',
      image: '/images/home-services.png',
      imageLeft: true, // Image is on the left
      description:
        "Whether you need a hard-to-find component to keep your operations running or ongoing training to fine-tune your team's skill set, we provide the technical confidence to keep moving.",
      buttonText: 'EXPLORE PRODUCTS',
    },
    {
      title: 'PRODUCTS',
      image: '/images/home-products.png',
      imageLeft: false, // Image is on the right
      description:
        "Whether you need a hard-to-find component to keep your operations running or ongoing training to fine-tune your team's skill set, we provide the technical confidence to keep moving.",
      buttonText: 'EXPLORE PRODUCTS',
    },
    {
      title: 'INNOVATIONS',
      image: '/images/home-innovations.png',
      imageLeft: true, // Image is on the left
      description:
        "Whether you need a hard-to-find component to keep your operations running or ongoing training to fine-tune your team's skill set, we provide the technical confidence to keep moving.",
      buttonText: 'EXPLORE PRODUCTS',
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header Animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Rows Directional Slide Animations based on image position
      solutions.forEach((item, idx) => {
        const rowEl = rowsRef.current[idx];
        if (!rowEl) return;

        const imgEl = rowEl.querySelector('.solution-image-col');
        const textEl = rowEl.querySelector('.solution-text-col');
        const isImageLeft = item.imageLeft;

        // Image animation: comes from left if image is left (-100px), comes from right if image is right (+100px)
        if (imgEl) {
          gsap.fromTo(
            imgEl,
            { x: isImageLeft ? -100 : 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: rowEl,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        // Text animation: comes from opposite side (+100px if image is left, -100px if image is right)
        if (textEl) {
          gsap.fromTo(
            textEl,
            { x: isImageLeft ? 100 : -100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: rowEl,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '5.5rem 0 0 0', // 0px left/right/bottom outer padding for 100% full-bleed
        color: '#253258',
        overflow: 'hidden',
      }}
    >
      {/* Section Header */}
      <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '4.5rem', padding: '0 1.5rem' }}>
        <h2
          style={{
            fontFamily: "'Open Sans', -apple-system, sans-serif",
            fontSize: 'clamp(1.5rem, 2.6vw, 2.2rem)',
            fontWeight: '700',
            color: '#253258',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          INDUSTRY SOLUTIONS
        </h2>
        <p
          style={{
            fontFamily: "'Open Sans', -apple-system, sans-serif",
            fontSize: '0.96rem',
            color: '#475569',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: '1.55',
          }}
        >
          We solve urgent operating needs while helping teams scale for tomorrow with technical expertise built for demanding environments.
        </p>
      </div>

      {/* 3 Full-Bleed Edge-to-Edge Alternating Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {solutions.map((item, idx) => {
          const isImageLeft = item.imageLeft;

          return (
            <div
              key={idx}
              ref={addToRowsRef}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                width: '100%',
                minHeight: '480px',
              }}
              className="solution-row"
            >
              {/* Image Column - 100% Full Bleed touching screen edges */}
              <div
                className="solution-image-col"
                style={{
                  order: isImageLeft ? 1 : 2,
                  width: '100%',
                  height: '100%',
                  minHeight: '380px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              {/* Text Content Column - Centered internal padding */}
              <div
                className="solution-text-col"
                style={{
                  order: isImageLeft ? 2 : 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '4.5rem 5.5rem',
                  backgroundColor: '#ffffff',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Open Sans', -apple-system, sans-serif",
                    fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
                    fontWeight: '700',
                    color: '#253258',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '1.2rem',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '1.02rem',
                    fontWeight: '400',
                    color: '#475569',
                    lineHeight: '1.7',
                    marginBottom: '2.2rem',
                    maxWidth: '540px',
                  }}
                >
                  {item.description}
                </p>

                {/* Sharp Button (borderRadius: 0px) */}
                <div>
                  <button
                    style={{
                      padding: '0.9rem 2.2rem',
                      backgroundColor: '#344473',
                      color: '#ffffff',
                      fontSize: '0.82rem',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      border: 'none',
                      borderRadius: '0px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      transition: 'background-color 0.2s ease, transform 0.2s ease',
                      boxShadow: '0 4px 15px rgba(52, 68, 115, 0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#253258';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#344473';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span>{item.buttonText}</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0 }}
                    >
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <polyline points="13 5 20 12 13 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .solution-text-col {
            padding: 3rem 2.5rem !important;
          }
        }
        @media (max-width: 850px) {
          .solution-row {
            grid-template-columns: 1fr !important;
          }
          .solution-image-col {
            order: 1 !important;
            min-height: 300px !important;
          }
          .solution-text-col {
            order: 2 !important;
            padding: 3rem 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

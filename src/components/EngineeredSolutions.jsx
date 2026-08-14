'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EngineeredSolutions() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const columnsRef = useRef([]);
  const borderRefs = useRef([]);
  const iconRefs = useRef([]);

  columnsRef.current = [];
  borderRefs.current = [];
  iconRefs.current = [];

  const addToColumnRefs = (el) => {
    if (el && !columnsRef.current.includes(el)) {
      columnsRef.current.push(el);
    }
  };

  const columns = [
    {
      title: 'SEALING PRODUCTS',
      iconSrc: '/images/icons/sealing-products.png',
      items: [
        'Gaskets, Kits & Seals Gaskets',
        'Hoses & Expansion Joints',
        'Fasteners & Bolting',
        'Flange Isolation Gaskets',
      ],
    },
    {
      title: 'ENGINEERED SOLUTIONS',
      iconSrc: '/images/icons/engine-sloutions.png',
      items: [
        'Reverse Engineering',
        'Custom Gasket Engineering',
        'Specialty Machined Parts',
        'Prototyping',
      ],
    },
    {
      title: 'TECHNICAL SERVICES',
      iconSrc: '/images/icons/tech-solutions.png',
      items: [
        'Field Measurement',
        'Gasket Recommendations',
        'Bolt-Up Protocol Calculations',
        'Training & Technical Support',
      ],
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      // 1. Heading rises up from bottom
      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
        );
      }

      // 2. Column items come up from bottom one by one starting from the left
      if (columnsRef.current.length > 0) {
        tl.fromTo(
          columnsRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.22,
            ease: 'power3.out',
          },
          '-=0.3'
        );
      }

      // 3. Vertical border lines attached to each icon draw into place
      if (borderRefs.current.length > 0) {
        tl.fromTo(
          borderRefs.current,
          { scaleY: 0, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.18,
            ease: 'power2.out',
          },
          '-=0.55'
        );
      }

      // 4. Icons display and glide out from behind their attached border
      if (iconRefs.current.length > 0) {
        tl.fromTo(
          iconRefs.current,
          { x: -35, opacity: 0, scale: 0.8 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            stagger: 0.18,
            ease: 'back.out(1.4)',
          },
          '-=0.45'
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
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Main Section Header */}
        <h2
          ref={headingRef}
          style={{
            fontFamily: "'Open Sans', -apple-system, sans-serif",
            fontSize: 'clamp(1.4rem, 2.5vw, 2.1rem)',
            fontWeight: '700',
            textAlign: 'center',
            color: '#253258',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '4.5rem',
          }}
        >
          ENGINEERED SOLUTIONS. BUILT TO PERFORM.
        </h2>

        {/* 3 Columns Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2.8rem',
          }}
          className="engineered-solutions-grid"
        >
          {columns.map((col, idx) => (
            <div
              key={idx}
              ref={addToColumnRefs}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
              }}
            >
              {/* Icon Wrapper with Attached Border Line */}
              <div
                style={{
                  flexShrink: 0,
                  position: 'relative',
                  paddingLeft: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                {/* Attached Left Border Line */}
                <div
                  ref={(el) => (borderRefs.current[idx] = el)}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '3px',
                    backgroundColor: '#253258',
                    borderRadius: '2px',
                    transformOrigin: 'top',
                  }}
                />

                {/* PNG Icon Image displaying from behind the border */}
                <img
                  ref={(el) => (iconRefs.current[idx] = el)}
                  src={col.iconSrc}
                  alt={col.title}
                  style={{
                    height: '115px',
                    width: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </div>

              {/* Right Content */}
              <div>
                <h3
                  style={{
                    fontFamily: "'Open Sans', -apple-system, sans-serif",
                    fontSize: '1.02rem',
                    fontWeight: '700',
                    color: '#253258',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '1.1rem',
                  }}
                >
                  {col.title}
                </h3>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.8rem',
                  }}
                >
                  {col.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        fontSize: '0.91rem',
                        fontWeight: '500',
                        color: '#475569',
                      }}
                    >
                      {/* Circle Arrow Icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 8 16 12 12 16" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .engineered-solutions-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

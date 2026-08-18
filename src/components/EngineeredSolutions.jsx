'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
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
        { name: 'Gaskets, Kits & Seals', href: '/products/gaskets-kits-seals' },
        { name: 'Hoses & Expansion Joints', href: '/products/jacketed-solutions' },
        { name: 'Fasteners & Bolting', href: '/products/specialized-solutions' },
        { name: 'Flange Isolation Gaskets', href: '/products/gaskets-kits-seals/ring-type-joint' },
      ],
    },
    {
      title: 'ENGINEERED SOLUTIONS',
      iconSrc: '/images/icons/engine-sloutions.png',
      items: [
        { name: 'Reverse Engineering', href: '/services/reverse' },
        { name: 'Custom Gasket Engineering', href: '/services/engineering' },
        { name: 'Specialty Machined Parts', href: '/products/specialized-solutions' },
        { name: 'Prototyping', href: '/services' },
      ],
    },
    {
      title: 'TECHNICAL SERVICES',
      iconSrc: '/images/icons/tech-solutions.png',
      items: [
        { name: 'Field Measurement', href: '/services/field-support' },
        { name: 'Gasket Recommendations', href: '/products/gaskets-kits-seals' },
        { name: 'Bolt-Up Protocol Calculations', href: '/resources' },
        { name: 'Training & Technical Support', href: '/services/training' },
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
        padding: '5rem 2rem 5.5rem 2rem',
        color: '#253258',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Title Case Section Header matching reference screenshot */}
        <h2
          ref={headingRef}
          style={{
            fontFamily: "'Open Sans', -apple-system, sans-serif",
            fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
            fontWeight: '400',
            textAlign: 'left',
            color: '#3b4a76',
            letterSpacing: '0.01em',
            marginBottom: '4.2rem',
          }}
        >
          Engineered Solutions. Built to Perform.
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
                alignItems: 'flex-start', // Display icons starting from top of card
                gap: '1.2rem',
              }}
            >
              {/* Icon Wrapper with Attached Border Line starting from top */}
              <div
                style={{
                  flexShrink: 0,
                  position: 'relative',
                  paddingLeft: '2px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  marginTop: '2px',
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
                {/* Prominent Column Title */}
                <h3
                  style={{
                    fontFamily: "'Open Sans', -apple-system, sans-serif",
                    fontSize: '1.28rem', // Increased title font size
                    fontWeight: '700',
                    color: '#3b4a76',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '1.2rem',
                    lineHeight: '1.25',
                    marginTop: '2px',
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
                    gap: '0.85rem',
                  }}
                >
                  {col.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href={item.href}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          fontSize: '0.94rem',
                          fontWeight: '400',
                          color: '#475569',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease, transform 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#0b2b48';
                          e.currentTarget.style.transform = 'translateX(4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#475569';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        <span>{item.name}</span>
                        <svg
                          width="15"
                          height="15"
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
                      </Link>
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

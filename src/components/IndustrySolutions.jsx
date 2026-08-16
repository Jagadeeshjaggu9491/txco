'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IndustrySolutions() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const rowsRef = useRef([]);

  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);

  rowsRef.current = [];

  const addToRowsRef = (el) => {
    if (el && !rowsRef.current.includes(el)) {
      rowsRef.current.push(el);
    }
  };

  const solutions = [
    {
      title: 'Services',
      image: '/images/home-services.png',
      imageLeft: true, // Image on left
      description: (
        <>
          Whether you need a hard-to-find component to keep your operations running or ongoing training to fine-tune your team's skill set, services like our proprietary{' '}
          <Link href="/services/reverse" style={{ color: '#1e293b', textDecoration: 'underline', fontWeight: '500' }}>
            reverse engineering
          </Link>{' '}
          and{' '}
          <Link href="/services/training" style={{ color: '#1e293b', textDecoration: 'underline', fontWeight: '500' }}>
            training
          </Link>{' '}
          gives your equipment and team a leading edge.
        </>
      ),
      buttonText: 'EXPLORE PRODUCTS',
      href: '/services',
    },
    {
      title: 'Products',
      image: '/images/home-products.png',
      imageLeft: false, // Image on right
      description:
        'As a manufacturer of industrial fasteners, gaskets, and custom-made hoses, we build each of our product lines on the same foundation: steadfast commitment to industry-leading expertise and stringent testing for durability and longevity.',
      buttonText: 'EXPLORE PRODUCTS',
      href: '/products',
    },
    {
      title: 'Innovations',
      image: '/images/home-innovations.png',
      imageLeft: true, // Image on left
      description:
        'New industries require new solutions. Learn how our team of experts are partnering with our customers to pioneer innovative solutions for some of the greatest challenges our industries face.',
      buttonText: 'EXPLORE PRODUCTS',
      href: '/resources',
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

        if (imgEl) {
          gsap.fromTo(
            imgEl,
            { x: isImageLeft ? -80 : 80, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: rowEl,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        if (textEl) {
          gsap.fromTo(
            textEl,
            { x: isImageLeft ? 80 : -80, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
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
        padding: '0 0 5.5rem 0',
        color: '#253258',
        overflow: 'hidden',
      }}
    >
      {/* Section Header Intro Banner with Light Cool Blue Background */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#f2f6fc',
          padding: '5rem 2rem 4.5rem 2rem',
          marginBottom: '4.5rem',
        }}
      >
        <div
          ref={headerRef}
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            textAlign: 'left',
          }}
        >
          <h2
            style={{
              fontFamily: "'Open Sans', -apple-system, sans-serif",
              fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              fontWeight: '600',
              color: '#1e293b',
              letterSpacing: '0.01em',
              marginBottom: '1.4rem',
            }}
          >
            Industry Solutions
          </h2>
          <p
            style={{
              fontFamily: "'Open Sans', -apple-system, sans-serif",
              fontSize: '1rem',
              color: '#475569',
              maxWidth: '560px',
              margin: '0',
              lineHeight: '1.65',
            }}
          >
            TXCO provides robust safety solutions tailored for every stage of the hydrogen process, from production to distribution. With 75+ years of experience in manufacturing and engineering, our diverse product lineup ensures safety compliance across varying temperatures and pressures throughout the hydrogen value chain.
          </p>
        </div>
      </div>

      {/* Grid Container with Proper Gaps and Spacing */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '5rem',
        }}
      >
        {solutions.map((item, idx) => {
          const isImageLeft = item.imageLeft;
          const isHovered = hoveredRowIndex === idx;

          return (
            <div
              key={idx}
              ref={addToRowsRef}
              onMouseEnter={() => setHoveredRowIndex(idx)}
              onMouseLeave={() => setHoveredRowIndex(null)}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '3.5rem',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              className="solution-row"
            >
              {/* Image Column with Grayscale to Color Hover Transition */}
              <div
                className="solution-image-col"
                style={{
                  order: isImageLeft ? 1 : 2,
                  width: '100%',
                  height: '340px',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: isHovered ? '0 12px 30px rgba(0, 0, 0, 0.12)' : '0 4px 12px rgba(0, 0, 0, 0.05)',
                  transition: 'box-shadow 0.4s ease',
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
                    filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)', // Grayscale by default, vibrant colors on hover!
                    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                    transition: 'filter 0.5s ease, transform 0.5s ease',
                  }}
                />
              </div>

              {/* Text Content Column */}
              <div
                className="solution-text-col"
                style={{
                  order: isImageLeft ? 2 : 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '1rem 0',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Open Sans', -apple-system, sans-serif",
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                    fontWeight: '600',
                    color: isHovered ? '#0b2b48' : '#3b4674',
                    letterSpacing: '0.01em',
                    marginBottom: '1.2rem',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '1rem',
                    fontWeight: '400',
                    color: '#475569',
                    lineHeight: '1.65',
                    marginBottom: '2.2rem',
                    maxWidth: '520px',
                  }}
                >
                  {item.description}
                </p>

                {/* Sharp Button with White Circle Arrow Badge */}
                <div>
                  <Link href={item.href} style={{ textDecoration: 'none' }}>
                    <button
                      style={{
                        padding: '0.85rem 2rem',
                        backgroundColor: '#3b4674',
                        color: '#ffffff',
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        border: 'none',
                        borderRadius: '0px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.85rem',
                        transition: 'background-color 0.2s ease, transform 0.2s ease',
                        boxShadow: '0 4px 15px rgba(59, 70, 116, 0.25)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#2a3356';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#3b4674';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <span>{item.buttonText}</span>
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
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
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .solution-row {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .solution-image-col {
            order: 1 !important;
            height: 260px !important;
          }
          .solution-text-col {
            order: 2 !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

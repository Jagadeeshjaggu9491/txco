'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { industrySolutionsData } from '@/data/homeData';

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

  const solutions = industrySolutionsData;

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
    <section ref={sectionRef} className="industry-solutions-section">
      {/* Section Header Intro Banner */}
      <div className="industry-solutions-intro">
        <div ref={headerRef} className="txco-container">
          <h2 className="industries-heading">
            Industry Solutions
          </h2>
          <p className="section-subtitle">
            TXCO provides robust safety solutions tailored for every stage of the hydrogen process, from production to distribution. With 75+ years of experience in manufacturing and engineering, our diverse product lineup ensures safety compliance across varying temperatures and pressures throughout the hydrogen value chain.
          </p>
        </div>
      </div>

      {/* Grid Container */}
      <div className="solutions-rows-container">
        {solutions.map((item, idx) => {
          const isImageLeft = item.imageLeft;
          const isHovered = hoveredRowIndex === idx;

          return (
            <div
              key={idx}
              ref={addToRowsRef}
              onMouseEnter={() => setHoveredRowIndex(idx)}
              onMouseLeave={() => setHoveredRowIndex(null)}
              className="solution-row"
            >
              {/* Image Column */}
              <div
                className="solution-image-col"
                style={{ order: isImageLeft ? 1 : 2 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="solution-img"
                />
              </div>

              {/* Text Content Column */}
              <div
                className="solution-text-col"
                style={{ order: isImageLeft ? 2 : 1 }}
              >
                <div className="solution-text-content">
                  <h3 className="solution-title">
                    {item.title}
                  </h3>

                  <p className="solution-desc">
                    {item.description}
                  </p>

                  <div className="solution-btn-wrapper">
                    <Link href={item.href} style={{ textDecoration: 'none' }}>
                      <button className="txco-btn txco-btn-steel">
                        <span>{item.buttonText}</span>
                        <div className="txco-btn-icon-circle">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
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
            </div>
          );
        })}
      </div>
    </section>
  );
}

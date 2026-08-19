'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { engineeredSolutionsData } from '@/data/homeData';

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

  const columns = engineeredSolutionsData;

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

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
        );
      }

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
    <section ref={sectionRef} className="engineered-solutions-section">
      <div className="txco-container">
        <h2 ref={headingRef} className="engineered-solutions-heading">
          Engineered Solutions. Built to Perform.
        </h2>

        <div className="engineered-solutions-grid">
          {columns.map((col, idx) => (
            <div key={idx} ref={addToColumnRefs} className="engineered-col-card">
              <div className="engineered-icon-wrapper">
                <div
                  ref={(el) => (borderRefs.current[idx] = el)}
                  className="engineered-vertical-line"
                />
                <img
                  ref={(el) => (iconRefs.current[idx] = el)}
                  src={col.iconSrc}
                  alt={col.title}
                  className="engineered-icon-img"
                />
              </div>

              <div>
                <h3 className="engineered-col-title">{col.title}</h3>
                <ul className="engineered-items-list">
                  {col.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link href={item.href} className="engineered-item-link">
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
    </section>
  );
}

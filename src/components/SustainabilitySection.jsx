'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sustainabilityData } from '@/data/homeData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SustainabilitySection() {
  const sectionRef = useRef(null);
  const colsRef = useRef([]);

  colsRef.current = [];

  const addToColsRef = (el) => {
    if (el && !colsRef.current.includes(el)) {
      colsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (colsRef.current.length > 0) {
        gsap.fromTo(
          colsRef.current,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.2,
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
    <section ref={sectionRef} className="sustainability-section">
      <div className="sustainability-grid">
        {/* Left Column: Renewable Energy */}
        <div ref={addToColsRef} className="sustainability-col">
          <div>
            <h2 className="sustainability-heading">
              Accelerating <br /> renewable energy
            </h2>
            <p className="sustainability-text">
              {sustainabilityData.renewable.description}
            </p>
          </div>

          <Link href={sustainabilityData.renewable.href} style={{ textDecoration: 'none' }}>
            <button className="txco-btn txco-btn-steel">
              <span>{sustainabilityData.renewable.btnText}</span>
              <div className="txco-btn-icon-circle">
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

        {/* Right Column: Safety & Sustainability */}
        <div ref={addToColsRef} className="sustainability-col">
          <div>
            <h2 className="sustainability-heading">
              Committed to Safety <br /> and Sustainability
            </h2>
            <p className="sustainability-text">
              Through constant improvement of our{' '}
              <Link href="/products" style={{ color: '#1e293b', textDecoration: 'underline', fontWeight: '500' }}>
                products
              </Link>
              , processes, and services, we support the safe operations of essential industries and partner with forward-thinking customers on innovations that protect the environment for future generations.
            </p>
          </div>

          <Link href={sustainabilityData.safety.href} style={{ textDecoration: 'none' }}>
            <button className="txco-btn txco-btn-steel">
              <span>{sustainabilityData.safety.btnText}</span>
              <div className="txco-btn-icon-circle">
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
    </section>
  );
}

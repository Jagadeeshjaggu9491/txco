'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import '@/styles/sticky-services.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesList } from '@/data/servicesData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StickyServicesSection({
  services = servicesList,
  title = 'Specialized Engineering & Field Services',
  subtitle = 'We back our manufacturing with high-level metallurgical and mechanical engineering support to optimize joint integrity, prevent fugitive emissions, and eliminate premature failure.',
}) {
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;

        // GSAP ScrollTrigger entrance animation as specified
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [services]);

  return (
    <section className="sticky-services-section">
      <div className="sticky-services-container">
        {/* Section Header */}
        <div className="sticky-services-header">
          <h2 className="sticky-services-title">{title}</h2>
          <p className="sticky-services-subtitle">{subtitle}</p>
        </div>

        {/* Stacking Cards Container */}
        <div className="sticky-services-cards-wrap">
          {services.map((svc, index) => {
            const isOdd = index % 2 !== 0;

            return (
              <div
                key={svc.id || index}
                ref={addToCardsRef}
                className={`sticky-service-card ${isOdd ? 'reverse' : ''}`}
                style={{
                  position: 'sticky',
                  top: `calc(100px + ${index * 25}px)`,
                }}
              >
                {/* Single Static Image Column */}
                <div className="sticky-service-media-col">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="sticky-service-img"
                  />
                </div>

                {/* Content Column: Clean 3-line description only */}
                <div className="sticky-service-content-col">
                  <span className="sticky-service-tag">SERVICE {svc.num}</span>
                  <h3 className="sticky-service-card-title">{svc.title}</h3>
                  <p className="sticky-service-card-desc">{svc.cardDesc}</p>

                  {/* Action Button */}
                  <Link href={`/services/${svc.slug}`} style={{ textDecoration: 'none' }}>
                    <button className="txco-btn txco-btn-steel">
                      <span>EXPLORE SERVICES</span>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

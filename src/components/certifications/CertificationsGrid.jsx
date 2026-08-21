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
    <section ref={sectionRef} className="certifications-grid-section">
      <div className="certifications-grid-container">
        {/* 3-Column Certificates Grid */}
        <div className="certifications-cards-grid">
          {certificatesList.map((item) => (
            <div
              key={item.id}
              ref={addToCardsRef}
              className="certificate-card-item"
            >
              {/* Certificate Image Frame */}
              <div className="certificate-img-frame">
                <img
                  src={item.image}
                  alt={item.title}
                  className="certificate-img"
                  onError={(e) => {
                    e.currentTarget.src = '/images/home-products.png';
                  }}
                />
              </div>

              {/* Certificate Title Label */}
              <h3 className="certificate-title">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

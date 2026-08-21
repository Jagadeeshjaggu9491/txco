'use client';

import React, { useEffect, useRef } from 'react';
import { faqsHeroData } from '@/data/faqsData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FaqsHero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 }
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="faqs-hero-section">
      <div className="faqs-hero-container">
        <div className="faqs-hero-content">
          <h1 ref={titleRef} className="faqs-hero-title">
            {faqsHeroData.title}
          </h1>

          <p ref={subtitleRef} className="faqs-hero-subtitle">
            {faqsHeroData.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

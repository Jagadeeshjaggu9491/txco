'use client';

import React, { useEffect, useRef } from 'react';
import { certificationsHeroData } from '@/data/certificationsData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CertificationsHero() {
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
    <section ref={containerRef} className="certifications-hero-section">
      <div className="certifications-hero-container">
        <div className="certifications-hero-content">
          <h1 ref={titleRef} className="certifications-hero-title">
            {certificationsHeroData.title}
          </h1>

          <p ref={subtitleRef} className="certifications-hero-subtitle">
            {certificationsHeroData.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

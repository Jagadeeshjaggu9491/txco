'use client';

import React, { useEffect, useRef } from 'react';
import { blogHeroData } from '@/data/blogData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BlogHero() {
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
    <section ref={containerRef} className="blog-hero-section">
      <div className="blog-hero-container">
        <div className="blog-hero-content">
          <h1 ref={titleRef} className="blog-hero-title">
            {blogHeroData.title}
          </h1>

          <p ref={subtitleRef} className="blog-hero-subtitle">
            {blogHeroData.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

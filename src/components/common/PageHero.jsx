'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Reusable PageHero Component
 * 
 * @param {string|React.ReactNode} title - Main hero title
 * @param {string|React.ReactNode} subtitle - Description / Subtitle
 * @param {string|React.ReactNode} badge - Optional top badge pill
 * @param {string} bgImage - Path to banner image (default: '/images/banner/txco-page-banner.avif')
 * @param {string} bgPosition - CSS background-position (default: 'center bottom')
 * @param {string} minHeight - CSS min-height (default: '450px')
 * @param {string} overlayGradient - Gradient layer above/behind image
 * @param {string} className - Optional extra class
 * @param {React.ReactNode} children - Optional extra elements (e.g. CTA buttons, breadcrumb)
 */
export default function PageHero({
  title,
  subtitle,
  description,
  badge,
  bgImage = '/images/banner/txco-page-banner.avif',
  bgPosition = 'center bottom',
  minHeight = '450px',
  overlayGradient = null,
  className = '',
  children,
}) {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const extraRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, scale: 0.85, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5 }
        );
      }

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.7 },
          badgeRef.current ? '-=0.25' : '0'
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.65 },
          '-=0.35'
        );
      }

      if (extraRef.current) {
        tl.fromTo(
          extraRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.55 },
          '-=0.3'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [title, subtitle, description, bgImage]);

  const subText = subtitle || description;

  // Background style: pure image without color gradient unless explicitly requested
  const backgroundStyle = {
    backgroundImage: overlayGradient
      ? `${overlayGradient}, url('${bgImage}')`
      : bgImage
      ? `url('${bgImage}')`
      : undefined,
    backgroundPosition: bgPosition,
    minHeight: minHeight,
  };

  return (
    <section
      ref={containerRef}
      className={`page-hero-section ${className}`}
      style={backgroundStyle}
    >
      <div className="page-hero-container">
        <div className="page-hero-content">
          {badge && (
            <div ref={badgeRef} className="page-hero-badge">
              {badge}
            </div>
          )}

          {title && (
            <h1 ref={titleRef} className="page-hero-title">
              {title}
            </h1>
          )}

          {subText && (
            <p ref={subtitleRef} className="page-hero-subtitle">
              {subText}
            </p>
          )}

          {children && (
            <div ref={extraRef} className="page-hero-extra">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

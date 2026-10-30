'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '@/styles/page-hero.css';

/**
 * Helper to format hero title with Navy + Vibrant Green styling
 * matching the UI design (e.g. "QUALITY POLICY", "TXCO SEALING")
 */
function formatHeroTitle(title, highlightWord) {
  if (!title) {
    return (
      <>
        <span className="page-hero-title-navy">TXCO </span>
        <span className="page-hero-title-green">SEALING</span>
      </>
    );
  }

  // If already a React element/JSX, render directly
  if (React.isValidElement(title)) {
    return title;
  }

  if (typeof title !== 'string') {
    return title;
  }

  const trimmed = title.trim();

  // If a specific highlight word is specified
  if (highlightWord && trimmed.toLowerCase().includes(highlightWord.toLowerCase())) {
    const regex = new RegExp(`(${highlightWord})`, 'gi');
    const parts = trimmed.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === highlightWord.toLowerCase() ? (
            <span key={i} className="page-hero-title-green">
              {part}
            </span>
          ) : (
            <span key={i} className="page-hero-title-navy">
              {part}
            </span>
          )
        )}
      </>
    );
  }

  // Split into words: highlight the final word in vibrant green
  const words = trimmed.split(/\s+/);
  if (words.length === 1) {
    return <span className="page-hero-title-navy">{words[0]}</span>;
  }

  const leadingWords = words.slice(0, -1).join(' ');
  const lastWord = words[words.length - 1];

  return (
    <>
      <span className="page-hero-title-navy">{leadingWords} </span>
      <span className="page-hero-title-green">{lastWord}</span>
    </>
  );
}

const DEFAULT_BANNER = '/images/title-section/page-hero-banner-new.avif';
const DEFAULT_SUBTITLE =
  'TXCO Sealing Products Private Limited combines precision manufacturing, material expertise, standards-based production and sealing knowledge to provide dependable sealing and flange solutions for demanding industrial applications.';

/**
 * Reusable PageHero Component
 *
 * Full image is visible at its natural aspect ratio without hardcoded height,
 * ensuring no cropping of the metallic rings or graphic elements.
 */
export default function PageHero({
  title,
  highlightWord,
  subtitle,
  description,
  badge,
  bgImage = DEFAULT_BANNER,
  className = '',
  children,
}) {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const extraRef = useRef(null);

  // Automatically migrate legacy dark banner to the new precision rings banner
  const activeBg =
    !bgImage || bgImage === '/images/banner/txco-page-banner.avif'
      ? DEFAULT_BANNER
      : bgImage;

  // Subtitle fallback matching the UI screen
  const subText =
    subtitle !== undefined
      ? subtitle
      : description !== undefined
      ? description
      : DEFAULT_SUBTITLE;

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
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          badgeRef.current ? '-=0.25' : '0'
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.65 },
          '-=0.35'
        );
      }

      if (extraRef.current) {
        tl.fromTo(
          extraRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.55 },
          '-=0.3'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [title, subtitle, description, activeBg]);

  return (
    <section ref={containerRef} className={`page-hero-section ${className}`}>
      {/* Full Banner Image Layer - Natural aspect ratio, 100% visible, no height clipping */}
      <div className="page-hero-bg-wrap" aria-hidden="true">
        <img
          src={activeBg}
          alt=""
          className="page-hero-bg-img"
          loading="eager"
        />
      </div>

      {/* Content Layer overlaid on the banner */}
      <div className="page-hero-container">
        <div className="page-hero-content">
          {badge && (
            <div ref={badgeRef} className="page-hero-badge">
              {badge}
            </div>
          )}

          <h1 ref={titleRef} className="page-hero-title">
            {formatHeroTitle(title, highlightWord)}
          </h1>

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

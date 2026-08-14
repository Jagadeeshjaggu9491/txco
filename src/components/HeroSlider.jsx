'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function HeroSlider() {
  const realSlides = [
    { id: 1, image: '/images/hero/hero-1.png' },
    { id: 2, image: '/images/hero/hero-2.png' },
    { id: 3, image: '/images/hero/hero-3.png' },
  ];

  // Extended slides for seamless infinite looping: [CloneLast, ...RealSlides, CloneFirst]
  const slides = [realSlides[realSlides.length - 1], ...realSlides, realSlides[0]];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at index 1 (first real slide)
  const [withTransition, setWithTransition] = useState(true);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Continuous auto-slide interval every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const goToNext = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const goToPrev = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Instant non-animated reset when reaching cloned slides at ends
  const handleTransitionEnd = () => {
    if (currentIndex === slides.length - 1) {
      setWithTransition(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setWithTransition(false);
      setCurrentIndex(realSlides.length);
    }
  };

  // Touch gesture swiping for mobile and tablet devices
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) {
      goToNext();
    } else if (diff < -40) {
      goToPrev();
    }
  };

  // Map current index to 0-based index for pagination dots
  const getActiveDotIndex = () => {
    if (currentIndex === 0) return realSlides.length - 1;
    if (currentIndex === slides.length - 1) return 0;
    return currentIndex - 1;
  };

  return (
    <section
      className="hero-slider-section"
      style={{
        width: '100%',
        height: 'calc(100vh - 90px)',
        minHeight: '380px',
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0d14',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Track - Pure Images */}
      <div
        onTransitionEnd={handleTransitionEnd}
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: withTransition ? 'transform 1.2s cubic-bezier(0.25, 1, 0.4, 1)' : 'none',
        }}
      >
        {slides.map((slide, idx) => (
          <div
            key={`${slide.id}-${idx}`}
            style={{
              minWidth: '100%',
              height: '100%',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
      </div>

      {/* Pagination Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '0.4rem 0.9rem',
          background: 'rgba(0, 0, 0, 0.35)',
          backdropFilter: 'blur(6px)',
          borderRadius: '999px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        }}
      >
        {realSlides.map((_, idx) => {
          const isActive = getActiveDotIndex() === idx;
          return (
            <button
              key={idx}
              onClick={() => {
                setWithTransition(true);
                setCurrentIndex(idx + 1);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: isActive ? '24px' : '8px',
                height: '8px',
                borderRadius: '999px',
                background: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.4)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          );
        })}
      </div>

      <style jsx>{`
        @supports (height: 100dvh) {
          .hero-slider-section {
            height: calc(100dvh - 90px) !important;
          }
        }
        @media (max-width: 768px) {
          .hero-slider-section {
            min-height: 350px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-slider-section {
            min-height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}

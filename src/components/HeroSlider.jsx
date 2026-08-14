'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function HeroSlider() {
  const realSlides = [
    { id: 1, image: '/images/hero/hero-1.png' },
    { id: 2, image: '/images/hero/hero-2.png' },
    { id: 3, image: '/images/hero/hero-3.png' },
  ];

  // Extended slides array for seamless infinite looping: [CloneLast, Slide1, Slide2, Slide3, CloneFirst]
  const slides = [realSlides[2], ...realSlides, realSlides[0]];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const isTransitioningRef = useRef(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Steady 4.5s auto slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const goToPrev = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    isTransitioningRef.current = false;
    if (currentIndex >= slides.length - 1) {
      setWithTransition(false);
      setCurrentIndex(1);
    } else if (currentIndex <= 0) {
      setWithTransition(false);
      setCurrentIndex(realSlides.length);
    }
  };

  // Safety timer fallback to guarantee infinite continuous loop even if browser delays onTransitionEnd
  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => {
        setWithTransition(true);
        isTransitioningRef.current = false;
      });
      return () => cancelAnimationFrame(raf);
    }

    const safetyTimer = setTimeout(() => {
      if (isTransitioningRef.current) {
        handleTransitionEnd();
      }
    }, 1100);

    return () => clearTimeout(safetyTimer);
  }, [currentIndex, withTransition]);

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

  const getActiveDotIndex = () => {
    if (currentIndex === 0) return realSlides.length - 1;
    if (currentIndex >= slides.length - 1) return 0;
    return currentIndex - 1;
  };

  return (
    <section
      className="hero-slider-section"
      style={{
        width: '100%',
        height: 'calc(100vh - 100px)',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0a0d14',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Track */}
      <div
        onTransitionEnd={handleTransitionEnd}
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: withTransition ? 'transform 0.9s cubic-bezier(0.25, 1, 0.4, 1)' : 'none',
        }}
      >
        {slides.map((slide, idx) => (
          <div
            key={`${slide.id}-${idx}`}
            style={{
              minWidth: '100%',
              width: '100%',
              height: '100%',
              flexShrink: 0,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src={slide.image}
              alt={`TXCO Hero Slide ${slide.id}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '0.45rem 1rem',
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(8px)',
          borderRadius: '999px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        {realSlides.map((_, idx) => {
          const isActive = getActiveDotIndex() === idx;
          return (
            <button
              key={idx}
              onClick={() => {
                if (isTransitioningRef.current) return;
                isTransitioningRef.current = true;
                setWithTransition(true);
                setCurrentIndex(idx + 1);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: isActive ? '24px' : '8px',
                height: '8px',
                borderRadius: '999px',
                background: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.45)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          );
        })}
      </div>

      <style jsx>{`
        .hero-slider-section {
          height: calc(100vh - 100px);
        }
        @supports (height: 100dvh) {
          .hero-slider-section {
            height: calc(100dvh - 100px) !important;
          }
        }
      `}</style>
    </section>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  // Steady 5s auto slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

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

  // Safety timer fallback to guarantee infinite continuous loop
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

  return (
    <section
      className="hero-slider-section"
      style={{
        width: '100%',
        height: '70vh',
        maxHeight: '700px',
        minHeight: '380px',
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

      {/* Left Navigation Arrow */}
      <button
        onClick={goToPrev}
        aria-label="Previous Slide"
        style={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          zIndex: 20,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          color: '#333333',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.2s ease, transform 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={goToNext}
        aria-label="Next Slide"
        style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          zIndex: 20,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          color: '#333333',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.2s ease, transform 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        <ChevronRight size={24} />
      </button>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-slider-section {
            height: 52vh !important;
            min-height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}

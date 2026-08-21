'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlidesData } from '@/data/homeData';

export default function HeroSlider() {
  const realSlides = heroSlidesData;

  // Extended slides array for seamless infinite looping: [CloneLast, Slide1, Slide2, Slide3, CloneFirst]
  const slides = [realSlides[realSlides.length - 1], ...realSlides, realSlides[0]];

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
      className="hero-slider-section mb-4"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Track */}
      <div
        onTransitionEnd={handleTransitionEnd}
        className="hero-slides-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: withTransition ? 'transform 0.9s cubic-bezier(0.25, 1, 0.4, 1)' : 'none',
        }}
      >
        {slides.map((slide, idx) => (
          <div key={`${slide.id}-${idx}`} className="hero-slide-item">
            <img
              src={slide.image}
              alt={`TXCO Hero Slide ${slide.id}`}
              className="hero-slide-img"
            />
          </div>
        ))}
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={goToPrev}
        aria-label="Previous Slide"
        className="hero-arrow-btn hero-arrow-left"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={goToNext}
        aria-label="Next Slide"
        className="hero-arrow-btn hero-arrow-right"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}

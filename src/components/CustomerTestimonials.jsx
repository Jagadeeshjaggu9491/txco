'use client';

import React, { useState, useEffect, useRef } from 'react';
import { customerTestimonialsData } from '@/data/homeData';

export default function CustomerTestimonials() {
  const realSlides = customerTestimonialsData;

  // Extended slides array for seamless infinite looping: [CloneLast, ...realSlides, CloneFirst]
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
    }, 900);

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
      className="testimonials-section"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="testimonials-container">
        {/* Testimonial Outer Rounded Navy Card Box */}
        <div className="testimonial-card-box">
          {/* Quote Badge icon */}
          <div className="testimonial-quote-badge">
            <svg
              width="44"
              height="34"
              viewBox="0 0 44 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 34V19.4286C0 13.5238 1.48571 8.58095 4.45714 4.6C7.42857 0.619047 12.0381 -0.990477 18.2857 0.228571L16.2286 7.42857C12.9143 6.97143 10.5143 7.82857 9.02857 10C7.54286 12.1714 6.8 15.0286 6.8 18.5714H18.2857V34H0ZM25.7143 34V19.4286C25.7143 13.5238 27.2 8.58095 30.1714 4.6C33.1429 0.619047 37.7524 -0.990477 44 0.228571L41.9429 7.42857C38.6286 6.97143 36.2286 7.82857 34.7429 10C33.2571 12.1714 32.5143 15.0286 32.5143 18.5714H44V34H25.7143Z"
                fill="#b8c2d8"
              />
            </svg>
          </div>

          <h2 className="section-title section-title-center" style={{ color: '#3b4674', marginBottom: '2rem' }}>
            What Our Customers Are Saying
          </h2>

          {/* Slider Container Track */}
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <div
              onTransitionEnd={handleTransitionEnd}
              style={{
                display: 'flex',
                width: '100%',
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: withTransition ? 'transform 0.75s cubic-bezier(0.25, 1, 0.4, 1)' : 'none',
              }}
            >
              {slides.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    minWidth: '100%',
                    width: '100%',
                    flexShrink: 0,
                    padding: '0 1rem',
                    boxSizing: 'border-box',
                  }}
                >
                  <p className="testimonial-quote-text">
                    {item.quote}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'center' }}>
                    <span className="testimonial-author-role">
                      {item.role}
                    </span>
                    <span className="testimonial-author-company">
                      {item.company}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots below Card */}
        <div className="testimonial-dots-wrapper">
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
                className="testimonial-dot-btn"
                style={{
                  width: isActive ? '12px' : '9px',
                  height: isActive ? '12px' : '9px',
                  backgroundColor: isActive ? '#3b4674' : '#cbd5e1',
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

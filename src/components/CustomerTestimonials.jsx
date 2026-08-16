'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function CustomerTestimonials() {
  const realSlides = [
    {
      quote:
        'TXCO has proved that they go beyond expectations in quality, speed and support. During our turnaround, they exceeded expectations, but most importantly, they had “boots on the ground” which helped tremendously.',
      role: 'Buyer',
      company: 'Exxon Inc',
    },
    {
      quote:
        'The custom gaskets and specialty bolting solutions provided by TXCO have performed flawlessly under extreme high-pressure operations. Their engineering team is unmatched in responsiveness.',
      role: 'Plant Maintenance Director',
      company: 'Shell Operations',
    },
    {
      quote:
        'Fast delivery times, flawless reverse engineering, and outstanding technical support. TXCO is our trusted long-term sealing partner across all our manufacturing facilities.',
      role: 'Senior Supply Chain Manager',
      company: 'Chevron Energy',
    },
    {
      quote:
        'Outstanding quality control and precision flange isolation kits. TXCO consistently helps us prevent costly downtime and maintain strict environmental compliance.',
      role: 'Chief Operations Officer',
      company: 'PetroChina Refining',
    },
    {
      quote:
        "TXCO's customer service and field support staff respond instantly to urgent turnaround orders. Highly recommended for heavy industrial sealing applications.",
      role: 'Procurement Specialist',
      company: 'BASF Chemical',
    },
    {
      quote:
        'Engineering excellence and reliable high-temperature sealing products. TXCO has been an invaluable vendor for our power generation facilities worldwide.',
      role: 'Technical Services Director',
      company: 'General Electric Power',
    },
  ];

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
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '5.5rem 2rem',
        overflow: 'hidden',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div style={{ maxWidth: '880px', margin: '0 auto', position: 'relative' }}>
        {/* Testimonial Outer Rounded Navy Card Box matching reference screenshot */}
        <div
          style={{
            position: 'relative',
            border: '1.5px solid #3b4674',
            borderRadius: '24px',
            padding: '3.5rem 3rem 2.8rem 3rem',
            backgroundColor: '#ffffff',
            textAlign: 'center',
          }}
          className="testimonial-card-box"
        >
          {/* Quote Badge icon breaking top border centered */}
          <div
            style={{
              position: 'absolute',
              top: '-26px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#ffffff',
              padding: '0 1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
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

          {/* Title inside card */}
          <h2
            style={{
              fontFamily: "'Open Sans', -apple-system, sans-serif",
              fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
              fontWeight: '600',
              color: '#3b4674',
              letterSpacing: '0.01em',
              marginBottom: '2rem',
              lineHeight: '1.3',
            }}
          >
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
                  {/* Quote Paragraph */}
                  <p
                    style={{
                      fontFamily: "'Open Sans', -apple-system, sans-serif",
                      fontSize: '1.02rem',
                      fontWeight: '400',
                      color: '#475569',
                      lineHeight: '1.7',
                      maxWidth: '680px',
                      margin: '0 auto 2.2rem auto',
                    }}
                  >
                    {item.quote}
                  </p>

                  {/* Author Role & Company */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'center' }}>
                    <span
                      style={{
                        fontSize: '1.08rem',
                        fontWeight: '600',
                        color: '#3b4674',
                      }}
                    >
                      {item.role}
                    </span>
                    <span
                      style={{
                        fontSize: '1.02rem',
                        fontWeight: '400',
                        color: '#1e293b',
                      }}
                    >
                      {item.company}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots below Card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '2.2rem',
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
                  width: isActive ? '12px' : '9px',
                  height: isActive ? '12px' : '9px',
                  borderRadius: '50%',
                  backgroundColor: isActive ? '#3b4674' : '#cbd5e1',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .testimonial-card-box {
            padding: 3rem 1.5rem 2rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

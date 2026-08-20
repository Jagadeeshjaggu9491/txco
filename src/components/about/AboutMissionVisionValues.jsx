'use client';

import React, { useEffect, useRef } from 'react';
import { missionVisionData, valuesData } from '@/data/aboutData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutMissionVisionValues() {
  const sectionRef = useRef(null);
  const mvCardsRef = useRef([]);
  const valuesHeadingRef = useRef(null);
  const valueCardsRef = useRef([]);

  mvCardsRef.current = [];
  valueCardsRef.current = [];

  const addToMvRef = (el) => {
    if (el && !mvCardsRef.current.includes(el)) {
      mvCardsRef.current.push(el);
    }
  };

  const addToValueRef = (el) => {
    if (el && !valueCardsRef.current.includes(el)) {
      valueCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Mission & Vision entrance
      if (mvCardsRef.current.length > 0) {
        gsap.fromTo(
          mvCardsRef.current,
          { opacity: 0, y: 35, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 2. Our Values Heading
      if (valuesHeadingRef.current) {
        gsap.fromTo(
          valuesHeadingRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: valuesHeadingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 3. Staggered entrance for 3x3 Values grid
      if (valueCardsRef.current.length > 0) {
        gsap.fromTo(
          valueCardsRef.current,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.08,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: valueCardsRef.current[0],
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '5rem 2rem 6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Mission & Vision 2-Card Row matching Image 2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2.2rem',
            marginBottom: '5rem',
          }}
          className="mission-vision-grid"
        >
          {/* Card 1: Our Mission Statement */}
          <div
            ref={addToMvRef}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '3rem 2.5rem',
              border: '1px solid #edf2f7',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              minHeight: '220px',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
            }}
          >
            <h2
              style={{
                fontFamily: "'Open Sans', -apple-system, sans-serif",
                fontSize: '1.8rem',
                fontWeight: '500',
                color: '#1e293b',
                marginBottom: '1.2rem',
              }}
            >
              {missionVisionData.mission.title}
            </h2>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#475569',
                lineHeight: '1.6',
                margin: 0,
                maxWidth: '400px',
              }}
            >
              {missionVisionData.mission.description}
            </p>
          </div>

          {/* Card 2: Our Vision */}
          <div
            ref={addToMvRef}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '3rem 2.5rem',
              border: '1px solid #edf2f7',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              minHeight: '220px',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
            }}
          >
            <h2
              style={{
                fontFamily: "'Open Sans', -apple-system, sans-serif",
                fontSize: '1.8rem',
                fontWeight: '500',
                color: '#1e293b',
                marginBottom: '1.2rem',
              }}
            >
              {missionVisionData.vision.title}
            </h2>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#475569',
                lineHeight: '1.6',
                margin: 0,
                maxWidth: '400px',
              }}
            >
              {missionVisionData.vision.description}
            </p>
          </div>
        </div>

        {/* Middle Heading: Our values */}
        <h2
          ref={valuesHeadingRef}
          style={{
            fontFamily: "'Open Sans', -apple-system, sans-serif",
            fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
            fontWeight: '500',
            color: '#1e293b',
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          Our values
        </h2>

        {/* 3x3 Values Grid matching Image 2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.8rem',
          }}
          className="values-grid"
        >
          {valuesData.map((val) => {
            const isDark = val.type === 'dark';
            return (
              <div
                key={val.id}
                ref={addToValueRef}
                style={{
                  backgroundColor: isDark ? '#3f4770' : '#ffffff',
                  color: isDark ? '#ffffff' : '#1e293b',
                  borderRadius: '16px',
                  padding: '2.5rem 1.8rem',
                  border: isDark ? 'none' : '1.5px solid #cbd5e1',
                  boxShadow: isDark
                    ? '0 6px 18px rgba(63, 71, 112, 0.2)'
                    : '0 2px 8px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  minHeight: '170px',
                  transition:
                    'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  if (!isDark) {
                    e.currentTarget.style.borderColor = '#3f4770';
                    e.currentTarget.style.boxShadow =
                      '0 10px 24px rgba(63, 71, 112, 0.12)';
                  } else {
                    e.currentTarget.style.boxShadow =
                      '0 12px 28px rgba(63, 71, 112, 0.35)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  if (!isDark) {
                    e.currentTarget.style.borderColor = '#cbd5e1';
                    e.currentTarget.style.boxShadow =
                      '0 2px 8px rgba(0, 0, 0, 0.02)';
                  } else {
                    e.currentTarget.style.boxShadow =
                      '0 6px 18px rgba(63, 71, 112, 0.2)';
                  }
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Open Sans', -apple-system, sans-serif",
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: isDark ? '#ffffff' : '#1e293b',
                    marginBottom: '0.8rem',
                    lineHeight: '1.35',
                  }}
                >
                  {val.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: '400',
                    color: isDark ? 'rgba(255, 255, 255, 0.88)' : '#64748b',
                    lineHeight: '1.5',
                    margin: 0,
                  }}
                >
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .mission-vision-grid {
            grid-template-columns: 1fr !important;
          }
          .values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .values-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

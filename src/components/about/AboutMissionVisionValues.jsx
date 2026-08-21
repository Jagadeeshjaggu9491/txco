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
    <section ref={sectionRef} className="about-mv-section">
      <div className="about-mv-container">
        {/* Mission & Vision 2-Card Row */}
        <div className="container px-0 mb-5">
          <div className="row g-4">
            {/* Card 1: Our Mission Statement */}
            <div className="col-12 col-md-6 d-flex">
              <div ref={addToMvRef} className="mission-vision-card">
                <h2 className="mission-vision-title">
                  {missionVisionData.mission.title}
                </h2>
                <p className="mission-vision-desc">
                  {missionVisionData.mission.description}
                </p>
              </div>
            </div>

            {/* Card 2: Our Vision */}
            <div className="col-12 col-md-6 d-flex">
              <div ref={addToMvRef} className="mission-vision-card">
                <h2 className="mission-vision-title">
                  {missionVisionData.vision.title}
                </h2>
                <p className="mission-vision-desc">
                  {missionVisionData.vision.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Heading: Our values */}
        <h2 ref={valuesHeadingRef} className="values-heading">
          Our values
        </h2>

        {/* 3x3 Values Grid */}
        <div className="values-grid">
          {valuesData.map((val) => {
            const isDark = val.type === 'dark';
            return (
              <div
                key={val.id}
                ref={addToValueRef}
                className={`value-card ${isDark ? 'value-card-dark' : 'value-card-light'}`}
              >
                <h3 className="value-card-title">
                  {val.title}
                </h3>
                <p className="value-card-desc">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

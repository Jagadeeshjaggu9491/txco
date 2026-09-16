'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/industries-serve.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 8 Industries matching the UI image with alternating navy and green badges
export const defaultIndustriesList = [
  {
    title: 'Renewable Energy',
    badgeColor: 'navy',
    image: '/images/industries/Renewable-Energy.png',
    href: '/industries/energy',
  },
  {
    title: 'Power Generation',
    badgeColor: 'green',
    image: '/images/industries/Manufacturing-1.png',
    href: '/industries/energy',
  },
  {
    title: 'Oil & Gas',
    badgeColor: 'navy',
    image: '/images/industries/Renewable-Energy.png',
    href: '/industries/energy',
  },
  {
    title: 'EPC',
    badgeColor: 'green',
    image: '/images/industries/Water-and-Wastewater.png',
    href: '/industries',
  },
  {
    title: 'Chemical',
    badgeColor: 'navy',
    image: '/images/industries/Chemical.png',
    href: '/industries/chemical',
  },
  {
    title: 'Manufacturing',
    badgeColor: 'green',
    image: '/images/industries/Manufacturing-1.png',
    href: '/industries/manufacturing',
  },
  {
    title: 'Metals and Mining',
    badgeColor: 'navy',
    image: '/images/industries/Metals-and-Mining.png',
    href: '/industries/metals-mining',
  },
  {
    title: 'Water and Wastewater',
    badgeColor: 'green',
    image: '/images/industries/Water-and-Wastewater.png',
    href: '/industries',
  },
];

export default function IndustriesWeServe({ items = defaultIndustriesList }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      });

      // 1. Header elements entrance (Title & Description)
      if (headerRef.current) {
        tl.fromTo(
          headerRef.current.children,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.15,
            ease: 'power3.out',
          }
        );
      }

      // 2. The 8 Cards Grid with smooth staggered lift & scale reveal
      if (cardsRef.current.length > 0) {
        tl.fromTo(
          cardsRef.current,
          { y: 45, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.45'
        );
      }

      // 3. Bottom CTA Button
      if (buttonRef.current) {
        tl.fromTo(
          buttonRef.current,
          { y: 22, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.4)',
          },
          '-=0.3'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="industries-serve-section">
      <div ref={containerRef} className="industries-serve-container">
        {/* Section Header */}
        <div ref={headerRef} className="industries-serve-header">
          <h2 className="industries-serve-title heading-gradient">
            Industries We Serve
          </h2>
          <p className="industries-serve-desc">
            TXCO can help you solve the urgent needs you face today while helping you scale for tomorrow.
            Learn how we customize our solutions and technical expertise around your industry’s unique
            challenges.
          </p>
        </div>

        {/* 8 Rounded Cards Grid */}
        <div className="industries-serve-grid">
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.href || '/industries'}
              ref={addToCardsRef}
              className="industries-serve-card"
            >
              <div className="industries-card-img-wrapper">
                <img
                  src={item.image || '/images/industries/Renewable-Energy.png'}
                  alt={item.title}
                  className="industries-card-bg-img"
                  loading="lazy"
                />
              </div>

              {/* Bottom Capsule Badge */}
              <div className={`industries-card-badge badge-${item.badgeColor || (idx % 2 === 0 ? 'navy' : 'green')}`}>
                <span>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div ref={buttonRef} className="industries-serve-cta">
          <Link href="/industries" style={{ textDecoration: 'none' }}>
            <button className="txco-btn">
              <span>VIEW INDUSTRIES</span>
              <div className="txco-btn-icon-circle">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#26335d"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="13 5 20 12 13 19" />
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

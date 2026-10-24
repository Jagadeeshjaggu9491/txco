'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/industries-serve.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 4 Industry Circles matching the UI design
export const defaultIndustriesList = [
  {
    title: 'Renewable Energy',
    image: '/images/industries/Renewable-Energy.png',
    href: '/industries/energy',
  },
  {
    title: 'Power Generation',
    image: '/images/industries/Manufacturing-1.png',
    href: '/industries/energy',
  },
  {
    title: 'Oil & Gas',
    image: '/images/industries/Oil-and-Gas-Sunset.jpg',
    href: '/industries/energy',
  },
  {
    title: 'EPC',
    image: '/images/industries/Water-and-Wastewater.png',
    href: '/industries',
  },
];

export default function IndustriesWeServe({ items = defaultIndustriesList, showSustainability = true }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const circlesRef = useRef([]);
  const exploreBtnRef = useRef(null);
  const cardsRef = useRef([]);

  circlesRef.current = [];
  cardsRef.current = [];

  const addToCirclesRef = (el) => {
    if (el && !circlesRef.current.includes(el)) {
      circlesRef.current.push(el);
    }
  };

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header & Circles animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      if (headerRef.current) {
        tl.fromTo(
          headerRef.current.children,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
          }
        );
      }

      if (circlesRef.current.length > 0) {
        tl.fromTo(
          circlesRef.current,
          { y: 40, opacity: 0, scale: 0.92 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.4'
        );
      }

      if (exploreBtnRef.current) {
        tl.fromTo(
          exploreBtnRef.current,
          { y: 20, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.55,
            ease: 'back.out(1.4)',
          },
          '-=0.3'
        );
      }

      // 2. Dual Sustainability Cards reveal
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current[0],
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="industries-sustainability-section">
      {/* Background Brand Mark Watermarks: One Left-Top, Another Right-Bottom */}
      <div className="industries-watermarks-container" aria-hidden="true">
        <div className="industries-watermark-wrapper industries-watermark-left-top">
          <img
            src="/images/logo/txco-mark-right.avif"
            alt=""
            className="industries-watermark-img"
          />
        </div>

        <div className="industries-watermark-wrapper industries-watermark-right-bottom">
          <img
            src="/images/logo/txco-mark-left.png"
            alt=""
            className="industries-watermark-img"
          />
        </div>
      </div>

      <div className="industries-sustainability-container">
        
        {/* =========================================================
            PART 1: INDUSTRIES WE SERVE
        ========================================================= */}
        <div className="industries-part">
          {/* Section Header (Left-aligned) */}
          <div ref={headerRef} className="industries-header">
            <h2 className="industries-main-title">
              Industries We Serve
            </h2>
            <p className="industries-main-desc">
              TXCO can help you solve the urgent needs you face today while helping you scale for tomorrow. Learn how we customize our solutions and technical expertise around your industry’s unique challenges.
            </p>
          </div>

          {/* 4 Circular Industry Cards */}
          <div className="industries-circles-grid">
            {items.map((item, idx) => (
              <Link
                key={idx}
                href={item.href || '/industries'}
                ref={addToCirclesRef}
                className="industry-circle-card"
              >
                <div className="industry-circle-img-wrap">
                  <img
                    src={item.image || '/images/industries/Renewable-Energy.png'}
                    alt={item.title}
                    className="industry-circle-img"
                    loading="lazy"
                  />
                  <div className="industry-circle-overlay" />
                </div>
                <span className="industry-circle-title">{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Centered Explore Button */}
          <div ref={exploreBtnRef} className="industries-explore-wrap">
            <Link href="/industries" className="industries-explore-btn">
              <span>EXPLORE</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* =========================================================
            PART 2: SUSTAINABILITY DUAL CARDS
        ========================================================= */}
        {showSustainability && (
          <div className="sustainability-part">
            <div className="sustainability-cards-grid">
              
              {/* Left Card: Accelerating renewable energy */}
              <div
                ref={addToCardsRef}
                className="sustainability-card card-accelerating"
              >
                <div className="sustainability-card-bg-wrap">
                  <img
                    src="/images/Accelerating-card-bg.avif"
                    alt="Accelerating renewable energy"
                    className="sustainability-bg-img"
                    loading="lazy"
                  />
                  <div className="sustainability-bg-overlay overlay-accelerating" />
                </div>

                <div className="sustainability-card-content">
                  <div>
                    <h3 className="sustainability-card-title">
                      Accelerating<br />renewable energy
                    </h3>
                    <p className="sustainability-card-desc">
                      We’re committed to being the custom gasket, seal and bolt manufacturer of choice for the renewable energy industry, by engineering custom sealing and attachment solutions for wind energy, hydro energy, geothermal energy, and alternative fuels sectors. Regardless of industry, we help every customer increase efficiency and pursue lower emissions.
                    </p>
                  </div>

                  <div className="sustainability-card-action">
                    <Link href="/industries/energy" className="sustainability-pill-btn">
                      <span>EXPLORE RENEWABLE SOLUTIONS</span>
                      <div className="sustainability-btn-icon">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Card: Committed to Safety and Sustainability */}
              <div
                ref={addToCardsRef}
                className="sustainability-card card-committed"
              >
                <div className="sustainability-card-bg-wrap">
                  <img
                    src="/images/Committed-card-bg.avif"
                    alt="Committed to Safety and Sustainability"
                    className="sustainability-bg-img"
                    loading="lazy"
                  />
                  <div className="sustainability-bg-overlay overlay-committed" />
                </div>

                <div className="sustainability-card-content">
                  <div>
                    <h3 className="sustainability-card-title">
                      Committed to Safety<br />and Sustainability
                    </h3>
                    <p className="sustainability-card-desc">
                      Through constant improvement of our{' '}
                      <Link href="/products" className="sustainability-inline-link">
                        products
                      </Link>
                      , processes, and services, we support the safe operations of essential industries and partner with forward-thinking customers on innovations that protect the environment for future generations.
                    </p>
                  </div>

                  <div className="sustainability-card-action">
                    <Link href="/sustainability" className="sustainability-pill-btn">
                      <span>SUSTAINABILITY AT TXCO</span>
                      <div className="sustainability-btn-icon">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

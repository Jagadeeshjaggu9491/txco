'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/industries-serve-new.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 5 Critical Industry Domains with user-provided engineering content
export const industriesNewData = [
  {
    id: 'energy-oil-gas',
    title: 'Energy, Oil & Gas',
    subtitle: 'Sealing Solutions for Exploration, Production, Transportation and Refining',
    description:
      'Gaskets play a critical role in oil and gas operations, where they are used in pipeline flange connections, wellhead equipment, pressure vessels, refineries, offshore platforms, LNG facilities, pumps, compressors and gas processing systems. TXCO offers RTJ, Spiral Wound, Kammprofile, Metal Jacketed and Flange Isolation Gaskets to meet application-specific sealing requirements.',
    specs: ['RTJ Gaskets', 'Spiral Wound', 'Kammprofile', 'Metal Jacketed', 'Flange Isolation'],
    href: '/industries/energy',
    theme: 'theme-white',
  },
  {
    id: 'chemical-petrochemical',
    title: 'Chemical & Petrochemical',
    subtitle: 'Sealing Solutions for Chemical Processing and Fluid Handling',
    description:
      'Gaskets are widely used in chemical reactors, storage tanks, heat exchangers, condensers, distillation columns, pumps, valves and process pipelines handling corrosive chemicals, solvents and industrial fluids. TXCO provides PTFE, Modified PTFE, CNAF, Rubber, Spiral Wound and Kammprofile Gaskets, with material selection based on chemical compatibility and operating conditions.',
    specs: ['PTFE & ePTFE', 'Modified PTFE', 'CNAF', 'Rubber Gaskets', 'Spiral Wound', 'Kammprofile'],
    href: '/industries/chemical',
    theme: 'theme-mint',
  },
  {
    id: 'manufacturing-heavy-industries',
    title: 'Manufacturing & Heavy Industries',
    subtitle: 'Sealing Solutions for Industrial Machinery and Process Equipment',
    description:
      'Industrial gaskets are essential in manufacturing plants, boilers, hydraulic systems, compressors, pumps, gearboxes, heat exchangers and utility piping networks. TXCO supplies Industrial Sheet Gaskets, Rubber Gaskets, Spiral Wound Gaskets, O-Rings, Gland Packing and specialised sealing components to support equipment reliability and process continuity.',
    specs: ['Industrial Sheet', 'Rubber Gaskets', 'Spiral Wound', 'O-Rings', 'Gland Packing'],
    href: '/industries/manufacturing',
    theme: 'theme-emerald',
  },
  {
    id: 'metals-mining',
    title: 'Metals & Mining',
    subtitle: 'Sealing Solutions for Mineral Processing and Metal Production',
    description:
      'Gaskets are used in slurry pipelines, pumping systems, crushers, flotation equipment, mineral processing plants, cooling water networks, smelting units and metal refining facilities. TXCO offers Rubber, CNAF, PTFE, Spiral Wound and Flange Isolation Gaskets designed around the media, operating conditions and equipment requirements of mining and metal processing applications.',
    specs: ['Rubber Gaskets', 'CNAF', 'PTFE Gaskets', 'Spiral Wound', 'Flange Isolation'],
    href: '/industries/metals-mining',
    theme: 'theme-ice',
  },
  {
    id: 'aerospace-defence',
    title: 'Aerospace & Defence',
    subtitle: 'Sealing Solutions for Specialised Engineering and Equipment Systems',
    description:
      'Gaskets and sealing components are used in aircraft fuel systems, hydraulic and pneumatic assemblies, engine support equipment, ground support systems, defence vehicles and specialised fluid management equipment. TXCO offers application-specific metallic, PTFE, elastomeric and precision-cut sealing components, subject to the required technical specifications, material qualifications and application approvals.',
    specs: ['Metallic Components', 'PTFE Components', 'Elastomeric Seals', 'Precision-Cut Seals'],
    href: '/industries',
    theme: 'theme-deep-green',
  },
];

export default function IndustriesWeServeNew({ showSustainability = true }) {
  const sectionRef = useRef(null);
  const ringsImgRef = useRef(null);
  const sustainCardsRef = useRef([]);

  sustainCardsRef.current = [];
  const addSustainCardRef = (el) => {
    if (el && !sustainCardsRef.current.includes(el)) {
      sustainCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Rotate the 5-rings image smoothly based on scrolling through the section
      if (ringsImgRef.current) {
        gsap.to(ringsImgRef.current, {
          rotation: 360,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1, // Smooth scrubbed rotation with gentle momentum
            invalidateOnRefresh: true,
          },
        });
      }

      // Smooth reveal animation for Sustainability Dual Cards
      if (sustainCardsRef.current.length > 0) {
        gsap.fromTo(
          sustainCardsRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sustainCardsRef.current[0],
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
    <section ref={sectionRef} className="industries-new-section">
      {/* Background Brand Mark Watermarks */}
      <div className="industries-new-watermarks" aria-hidden="true">
        <div className="industries-new-watermark-left">
          <img
            src="/images/logo/txco-mark-right.avif"
            alt=""
            className="industries-new-watermark-img"
          />
        </div>
        <div className="industries-new-watermark-right">
          <img
            src="/images/logo/txco-mark-left.png"
            alt=""
            className="industries-new-watermark-img"
          />
        </div>
      </div>

      <div className="industries-new-container">
        {/* =========================================================
            PART 1: Split Grid Layout (Sticky Left Column, Stacking Cards on Right)
        ========================================================= */}
        <div className="industries-new-grid">
          {/* LEFT COLUMN: Sticky Stage (Header + Rotating 5-Ring Emblem) */}
          <div className="industries-new-left-col">
            {/* Header Details */}
            <div className="industries-new-header">
              <h2 className="section-main-heading industries-new-heading">
                Industries We Serve
              </h2>

              <p className="industries-new-desc">
                From deepwater subsea trees to high-temperature chemical reactors, TXCO engineers mission-critical gaskets, forged flanges, and fluid containment systems customized to the severe operating demands of essential global industries.
              </p>

              <Link href="/industries" className="industries-new-cta-btn">
                <span>EXPLORE ALL INDUSTRIES</span>
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

            {/* Visual Emblem Stage: Clean Rotating 5-Ring Emblem */}
            <div className="industries-emblem-stage">
              {/* Soft Ambient Radial Glow behind the rings */}
              <div className="industries-emblem-glow" aria-hidden="true" />

              {/* The 5-Ring Emblem Graphic with Smooth Scroll Rotation */}
              <div className="industries-emblem-graphic-wrap">
                <img
                  ref={ringsImgRef}
                  src="/images/Five-Ring-txco.png"
                  alt="TXCO Interconnected Industry Rings"
                  className="industries-emblem-img"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Stacking Cards Deck (Matching Reference UI) */}
          <div className="industries-new-right-col">
            <div className="industries-cards-deck">
              {industriesNewData.map((item, idx) => (
                <article
                  key={item.id}
                  style={{ '--card-index': idx }}
                  className={`industry-card ${item.theme}`}
                >
                  {/* Body: Title, Subtitle & Description */}
                  <h3 className="industry-card-title">{item.title}</h3>
                  {item.subtitle && (
                    <div className="industry-card-subtitle">{item.subtitle}</div>
                  )}
                  <p className="industry-card-desc">{item.description}</p>

                  {/* Specs / Gasket Components Badges */}
                  {item.specs && item.specs.length > 0 && (
                    <div className="industry-card-specs">
                      {item.specs.map((spec, sIdx) => (
                        <span key={sIdx} className="industry-card-spec-item">
                          {spec}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Link */}
                  <div className="industry-card-link-wrap">
                    <Link href={item.href} className="industry-card-link">
                      <span>Explore Solutions</span>
                      <span className="industry-card-arrow">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
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
                ref={addSustainCardRef}
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
                ref={addSustainCardRef}
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

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const industryTabs = [
  {
    id: 'oil-and-gas',
    name: 'Oil & Gas',
    image: '/images/oil-and-gas-img.avif',
    description:
      'Reliable sealing for critical operations. Our gasket solutions help maintain leak-tight connections under pressure, temperature, and demanding process conditions.',
    links: [
      { title: 'Pipe Flange Gaskets', href: '/products/gaskets' },
      { title: 'Compressed Non-Asbestos Gaskets', href: '/products/sheet-gaskets' },
      { title: 'Spiral Wound Gaskets', href: '/products/metallic-gaskets' },
      { title: 'Rubber Gaskets', href: '/products/elastomeric-products' },
      { title: 'Ring Type Joints', href: '/products/rtj-gaskets' },
      { title: 'Metallic Gaskets', href: '/products/semi-metallic-gaskets' },
    ],
  },
  {
    id: 'chemical-processing',
    name: 'Chemical Processing',
    image: '/images/industries/Chemical.png',
    description:
      'Engineered to withstand harsh chemicals, corrosive media, and extreme thermal cycles, ensuring plant safety, minimal downtime, and environmental compliance.',
    links: [
      { title: 'PTFE & ePTFE Gaskets', href: '/products/sheet-gaskets' },
      { title: 'Spiral Wound Gaskets', href: '/products/metallic-gaskets' },
      { title: 'Kammprofile Gaskets', href: '/products/semi-metallic-gaskets' },
      { title: 'Flange Insulation Kits', href: '/products/gaskets/semi-metallic-gaskets/details?product=flange-isolation-kits' },
      { title: 'Acid-Resistant Gaskets', href: '/products/gaskets' },
      { title: 'Custom Machined Seals', href: '/products/valve-components' },
    ],
  },
  {
    id: 'power-generation',
    name: 'Power Generation',
    image: '/images/industries/Manufacturing-1.png',
    description:
      'High-performance gaskets engineered for steam turbines, heat exchangers, and boiler systems under intense thermodynamic stress and fluctuating pressures.',
    links: [
      { title: 'High-Temp Spiral Wound', href: '/products/metallic-gaskets' },
      { title: 'Kammprofile Heat Exchanger', href: '/products/semi-metallic-gaskets' },
      { title: 'Metal Jacketed Gaskets', href: '/products/metallic-gaskets' },
      { title: 'Turbine Casing Gaskets', href: '/products/gaskets' },
      { title: 'High-Pressure Flange Seals', href: '/products/flanges' },
      { title: 'Graphite-Inserted Gaskets', href: '/products/sheet-gaskets' },
    ],
  },
  {
    id: 'water-wastewater',
    name: 'Water & Wastewater',
    image: '/images/industries/Water-and-Wastewater.png',
    description:
      'Durable, non-toxic sealing solutions designed for municipal treatment plants, high-volume pumping stations, and pressurized water distribution networks.',
    links: [
      { title: 'Full Face Pipe Gaskets', href: '/products/gaskets' },
      { title: 'Rubber EPDM Gaskets', href: '/products/elastomeric-products' },
      { title: 'Flange Insulation Kits', href: '/products/gaskets/semi-metallic-gaskets/details?product=flange-isolation-kits' },
      { title: 'Monolithic Isolating Joints', href: '/products/flanges' },
      { title: 'Ductile Iron Flange Gaskets', href: '/products/gaskets' },
      { title: 'Fasteners & Hardware', href: '/products/flanges' },
    ],
  },
  {
    id: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    image: '/images/service-1.avif',
    description:
      'Ultra-pure sanitary gaskets and PTFE seals certified to meet stringent FDA and USP Class VI sanitary, sterilization, and cleanroom hygiene standards.',
    links: [
      { title: 'Sanitary Tri-Clamp Gaskets', href: '/products/gaskets' },
      { title: 'Pure Virgin PTFE Seals', href: '/products/sheet-gaskets' },
      { title: 'USP Class VI Elastomers', href: '/products/elastomeric-products' },
      { title: 'Encapsulated O-Rings', href: '/products/elastomeric-products' },
      { title: 'Diaphragm Valve Gaskets', href: '/products/valve-components' },
      { title: 'Precision Custom Seals', href: '/products/gaskets' },
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    image: '/images/Gasket-Inspection.avif',
    description:
      'Heavy-duty custom gaskets and precision sealing components built to reduce plant downtime and guarantee continuous operational efficiency.',
    links: [
      { title: 'Industrial Pipe Flanges', href: '/products/gaskets' },
      { title: 'Compressed Fiber Sheets', href: '/products/sheet-gaskets' },
      { title: 'Custom Machined Seals', href: '/products/valve-components' },
      { title: 'High-Tensile Stud Bolts', href: '/products/flanges' },
      { title: 'Equipment Plug Gaskets', href: '/products/gaskets' },
      { title: 'Reverse Engineering Spares', href: '/contact' },
    ],
  },
];

export default function IndustrySolutions() {
  const [activeTab, setActiveTab] = useState(0);
  const activeTabRef = useRef(0);
  const isClickingRef = useRef(false);

  const sectionRef = useRef(null);
  const pinTrackRef = useRef(null);
  const showcaseRef = useRef(null);
  const tabsBarRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  // Keep ref in sync
  useEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

  // Handle Tab Click
  const handleTabClick = (idx) => {
    if (idx === activeTab) return;
    setActiveTab(idx);
    activeTabRef.current = idx;

    // Scroll active button into view horizontally inside the tabs bar
    if (tabsBarRef.current) {
      const activeBtn = tabsBarRef.current.querySelector(`[data-index="${idx}"]`);
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }

    // Smoothly scroll window to target tab's section progress
    if (scrollTriggerRef.current) {
      isClickingRef.current = true;
      const st = scrollTriggerRef.current;
      const progressFraction = (idx + 0.5) / industryTabs.length;
      const targetScroll = st.start + progressFraction * (st.end - st.start);

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });

      setTimeout(() => {
        isClickingRef.current = false;
      }, 500);
    }
  };

  // Animate showcase content whenever active tab changes
  useEffect(() => {
    if (showcaseRef.current) {
      gsap.fromTo(
        showcaseRef.current,
        { opacity: 0.45, y: 8 },
        { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out', overwrite: 'auto' }
      );
    }
  }, [activeTab]);

  // ScrollTrigger Setup with Scrubbed Timeline for Butter-Smooth Tab Changing
  useEffect(() => {
    if (!pinTrackRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop & Tablets (>= 768px): Smooth timeline-driven scrub
      mm.add('(min-width: 768px)', () => {
        const pinDistance = (industryTabs.length - 1) * 380;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinTrackRef.current,
            pin: true,
            pinSpacing: true,
            start: 'top top+=75',
            end: `+=${pinDistance}`,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (isClickingRef.current) return;

              const progress = self.progress;
              const newIndex = Math.min(
                industryTabs.length - 1,
                Math.floor(progress * industryTabs.length)
              );

              if (newIndex !== activeTabRef.current) {
                activeTabRef.current = newIndex;
                setActiveTab(newIndex);

                if (tabsBarRef.current) {
                  const activeBtn = tabsBarRef.current.querySelector(`[data-index="${newIndex}"]`);
                  if (activeBtn) {
                    activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                  }
                }
              }
            },
          },
        });

        tl.to({}, { duration: 1 });
        scrollTriggerRef.current = tl.scrollTrigger;
      });

      // Small Mobile (< 768px): Responsive shorter runway
      mm.add('(max-width: 767px)', () => {
        const pinDistance = (industryTabs.length - 1) * 240;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinTrackRef.current,
            pin: true,
            pinSpacing: true,
            start: 'top top+=65',
            end: `+=${pinDistance}`,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (isClickingRef.current) return;

              const progress = self.progress;
              const newIndex = Math.min(
                industryTabs.length - 1,
                Math.floor(progress * industryTabs.length)
              );

              if (newIndex !== activeTabRef.current) {
                activeTabRef.current = newIndex;
                setActiveTab(newIndex);

                if (tabsBarRef.current) {
                  const activeBtn = tabsBarRef.current.querySelector(`[data-index="${newIndex}"]`);
                  if (activeBtn) {
                    activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                  }
                }
              }
            },
          },
        });

        tl.to({}, { duration: 1 });
        scrollTriggerRef.current = tl.scrollTrigger;
      });
    }, sectionRef);

    // Refresh after DOM layout finishes rendering
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  const currentTab = industryTabs[activeTab] || industryTabs[0];

  return (
    <section ref={sectionRef} className="industry-solutions-section">
      {/* Background Brand Mark Watermarks: One left-top, another right-bottom */}
      <div className="ind-sol-watermarks-container" aria-hidden="true">
        <div className="ind-sol-watermark-wrapper ind-sol-watermark-left-top">
          <img
            src="/images/logo/txco-mark-right.avif"
            alt=""
            className="ind-sol-watermark-img"
          />
        </div>

        <div className="ind-sol-watermark-wrapper ind-sol-watermark-right-bottom">
          <img
            src="/images/logo/txco-mark-left.png"
            alt=""
            className="ind-sol-watermark-img"
          />
        </div>
      </div>

      <div className="ind-sol-container">
        {/* Pinned Showcase Area */}
        <div ref={pinTrackRef} className="ind-sol-pin-container">
          <div className="ind-sol-sticky-panel">
            {/* Section Header */}
            <div className="ind-sol-header">
              <h2 className="ind-sol-heading">
                Sealing Solutions for Every Industry
              </h2>
              <p className="ind-sol-subtitle">
                From high-pressure pipelines to demanding industrial processes, our precision-engineered gaskets deliver dependable sealing, reduced leakage, and long-term performance.
              </p>
            </div>

            {/* Interactive Tabs Bar (Navy Capsule) */}
            <div className="ind-sol-tabs-wrapper">
              <div ref={tabsBarRef} className="ind-sol-tabs-bar" role="tablist">
                {industryTabs.map((tab, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      data-index={idx}
                      aria-selected={isActive}
                      className={`ind-sol-tab-btn ${isActive ? 'active' : ''}`}
                      onClick={() => handleTabClick(idx)}
                    >
                      {tab.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Upper Showcase: Image + Info & Product Links */}
            <div ref={showcaseRef} className="ind-sol-showcase">
              {/* Left Column: Image */}
              <div className="ind-sol-image-col">
                <div className="ind-sol-image-frame">
                  <img
                    src={currentTab.image}
                    alt={currentTab.name}
                    className="ind-sol-main-img"
                  />
                </div>
              </div>

              {/* Right Column: Text & 2-Col Links */}
              <div className="ind-sol-info-col">
                <p className="ind-sol-description">
                  {currentTab.description}
                </p>

                <div className="ind-sol-links-grid">
                  {currentTab.links.map((link, lIdx) => (
                    <Link
                      key={lIdx}
                      href={link.href}
                      className="ind-sol-link-item"
                    >
                      <span className="ind-sol-link-text">{link.title}</span>
                      <span className="ind-sol-link-arrow">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Dual Cards: Reverse Engineering Services & Innovations */}
        <div className="ind-sol-dual-cards">
          {/* Card 1: Reverse Engineering Services */}
          <div className="ind-sol-card">
            <div className="ind-sol-card-content">
              <h3 className="ind-sol-card-title">
                Reverse Engineering Services
              </h3>
              <p className="ind-sol-card-desc">
                Whether you need a hard-to-find component to keep your operations running or ongoing training to fine-tune your team&apos;s skill set, services like our proprietary reverse engineering and training gives your equipment and team a leading edge.
              </p>
            </div>
            <div className="ind-sol-card-img-wrap">
              <img
                src="/images/Reverse-Engineering-Services-img.avif"
                alt="Reverse Engineering Services"
                className="ind-sol-card-img"
              />
            </div>
          </div>

          {/* Card 2: Innovations */}
          <div className="ind-sol-card">
            <div className="ind-sol-card-content">
              <h3 className="ind-sol-card-title">
                Innovations
              </h3>
              <p className="ind-sol-card-desc">
                New industries require new solutions. Learn how our team of experts are partnering with our customers to pioneer innovative solutions for some of the greatest challenges our industries face.
              </p>
            </div>
            <div className="ind-sol-card-img-wrap">
              <img
                src="/images/Innovations-img.avif"
                alt="Innovations"
                className="ind-sol-card-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

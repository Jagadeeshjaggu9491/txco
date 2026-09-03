'use client';

import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import IndustrySolutions from '@/components/IndustrySolutions';
import AboutBrochure from '@/components/about/AboutBrochure';
import { aboutNewPageData } from '@/data/aboutNewData';
import '@/styles/about-new.css';
import { Shield, Disc, Cpu, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutUsNewPage() {
  const { hero, overview, capabilities, missionVision, values } = aboutNewPageData;

  // Animation Refs
  const pageWrapperRef = useRef(null);
  const overviewRef = useRef(null);
  const overviewLeftRef = useRef(null);
  const overviewRightRef = useRef(null);
  const capsHeaderRef = useRef(null);
  const capCardsRef = useRef([]);
  const vmSectionRef = useRef(null);
  const vmCardsRef = useRef([]);
  const valuesHeaderRef = useRef(null);
  const valueCardsRef = useRef([]);

  capCardsRef.current = [];
  vmCardsRef.current = [];
  valueCardsRef.current = [];

  const addToCapCardsRef = (el) => {
    if (el && !capCardsRef.current.includes(el)) {
      capCardsRef.current.push(el);
    }
  };

  const addToVmCardsRef = (el) => {
    if (el && !vmCardsRef.current.includes(el)) {
      vmCardsRef.current.push(el);
    }
  };

  const addToValueCardsRef = (el) => {
    if (el && !valueCardsRef.current.includes(el)) {
      valueCardsRef.current.push(el);
    }
  };

  // Map icon strings to Lucide components
  const renderCapIcon = (iconName) => {
    switch (iconName) {
      case 'Pipette':
        return <Layers size={24} strokeWidth={2.2} />;
      case 'Disc':
        return <Disc size={24} strokeWidth={2.2} />;
      case 'Shield':
        return <Shield size={24} strokeWidth={2.2} />;
      case 'Cpu':
        return <Cpu size={24} strokeWidth={2.2} />;
      default:
        return <Layers size={24} strokeWidth={2.2} />;
    }
  };

  useEffect(() => {
    if (!pageWrapperRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Overview Section Animations
      if (overviewRef.current) {
        const overviewTl = gsap.timeline({
          scrollTrigger: {
            trigger: overviewRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });

        if (overviewLeftRef.current) {
          overviewTl.fromTo(
            overviewLeftRef.current,
            { x: -40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
          );
        }

        if (overviewRightRef.current) {
          overviewTl.fromTo(
            overviewRightRef.current,
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
            '-=0.5'
          );
        }
      }

      // 2. Capabilities Section Animations
      if (capsHeaderRef.current) {
        gsap.fromTo(
          capsHeaderRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: capsHeaderRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (capCardsRef.current.length > 0) {
        gsap.fromTo(
          capCardsRef.current,
          { y: 45, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: capCardsRef.current[0],
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 3. Vision & Mission Animations
      if (vmCardsRef.current.length > 0) {
        gsap.fromTo(
          vmCardsRef.current,
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: vmSectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 4. Core Values Animations
      if (valuesHeaderRef.current) {
        gsap.fromTo(
          valuesHeaderRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: valuesHeaderRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (valueCardsRef.current.length > 0) {
        gsap.fromTo(
          valueCardsRef.current,
          { y: 40, opacity: 0, scale: 0.92 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: 'back.out(1.15)',
            scrollTrigger: {
              trigger: valueCardsRef.current[0],
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, pageWrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageWrapperRef} className="about-new-wrapper">
      <Header />

      {/* Hero Banner */}
      <PageHero
        title={hero.title}
        subtitle={hero.subtitle}
        bgImage={hero.bgImage}
        bgPosition="center bottom"
      />

      <main>
        {/* 1. Executive Narrative & Overview */}
        <section ref={overviewRef} className="about-new-overview-section">
          <div className="about-new-container">
            <div className="about-new-overview-grid">
              {/* Left Column: Mission Narrative */}
              <div ref={overviewLeftRef}>

                <h1 className="about-new-main-title">{overview.title}</h1>
                {overview.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="about-new-lead-text"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Right Column: About Us Image */}
              <div ref={overviewRightRef} className="about-new-overview-img-col">
                <div className="about-new-overview-img-wrapper">
                  <img
                    src="/images/about-us-right-image.avif"
                    alt="TXCO Sealing Products Engineering Reliability"
                    className="about-new-overview-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Core Manufacturing & Pipeline Capabilities */}
        <section className="about-new-capabilities-section">
          <div className="about-new-container">
            <div ref={capsHeaderRef} className="about-new-section-header">

              <h2 className="about-new-section-title">{capabilities.heading}</h2>
              <p className="about-new-section-subtitle">
                {capabilities.subheading}
              </p>
            </div>

            {/* 4 Capabilities Cards */}
            <div className="about-new-caps-grid">
              {capabilities.items.map((cap) => (
                <div
                  key={cap.id}
                  ref={addToCapCardsRef}
                  className="about-new-cap-card"
                >
                  <div className="about-new-cap-icon-box">
                    {renderCapIcon(cap.icon)}
                  </div>

                  <h3 className="about-new-cap-title">{cap.title}</h3>
                  <p className="about-new-cap-desc">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Vision & Mission Section */}
        <section ref={vmSectionRef} className="about-new-vm-section">
          <div className="about-new-container">
            <div className="about-new-vm-grid">
              {/* Vision Card */}
              <div
                ref={addToVmCardsRef}
                className="about-new-vm-card about-new-vm-card-vision"
              >
                <div className="about-new-vm-card-top-bar" />
                <span className="about-new-vm-badge">
                  {missionVision.vision.badge}
                </span>
                <h2 className="about-new-vm-title">
                  {missionVision.vision.title}
                </h2>
                <p className="about-new-vm-desc">
                  {missionVision.vision.description}
                </p>
              </div>

              {/* Mission Card */}
              <div
                ref={addToVmCardsRef}
                className="about-new-vm-card about-new-vm-card-mission"
              >
                <div className="about-new-vm-card-top-bar" />
                <span className="about-new-vm-badge">
                  {missionVision.mission.badge}
                </span>
                <h2 className="about-new-vm-title">
                  {missionVision.mission.title}
                </h2>
                <p className="about-new-vm-desc">
                  {missionVision.mission.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Core Values Section (3x2 Grid) */}
        <section className="about-new-values-section">
          <div className="about-new-container">
            <div ref={valuesHeaderRef} className="about-new-section-header">

              <h2 className="about-new-section-title">{values.heading}</h2>
              <p className="about-new-section-subtitle">{values.subheading}</p>
            </div>

            <div className="about-new-values-grid">
              {values.items.map((val) => {
                const isDark = val.type === 'dark';
                return (
                  <div
                    key={val.id}
                    ref={addToValueCardsRef}
                    className={`about-new-value-card ${isDark
                      ? 'about-new-value-card-dark'
                      : 'about-new-value-card-light'
                      }`}
                  >
                    <h3 className="about-new-value-title">{val.title}</h3>
                    <p className="about-new-value-desc">{val.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Industry Solutions Section */}
        <IndustrySolutions />

        {/* 6. Company Overview Brochure */}
        {/* <AboutBrochure /> */}

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

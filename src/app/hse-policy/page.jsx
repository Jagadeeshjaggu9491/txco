'use client';

import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import IndustrySolutions from '@/components/IndustrySolutions';
import '@/styles/policy-pages.css';
import { Shield, Hand, AlertTriangle, Leaf, Globe2, BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HsePolicyPage() {
  const statementLeftRef = useRef(null);
  const statementRightRef = useRef(null);
  const pillarsHeaderRef = useRef(null);
  const pillarCardsRef = useRef([]);
  const commitmentRef = useRef(null);

  pillarCardsRef.current = [];

  const addToPillarCardsRef = (el) => {
    if (el && !pillarCardsRef.current.includes(el)) {
      pillarCardsRef.current.push(el);
    }
  };

  const hsePillars = [
    {
      num: '01',
      title: 'Uncompromised Leadership & Accountability',
      desc: 'Executive leadership fully owns our HSE culture, embedding safety and sustainability directly into our operational strategy, resource allocation, and performance metrics.',
      icon: Shield,
    },
    {
      num: '02',
      title: 'Stop Work Authority',
      desc: 'Every employee and contractor has the absolute right, responsibility, and executive backing to halt any unsafe operation immediately, without fear of reprisal.',
      icon: Hand,
    },
    {
      num: '03',
      title: 'Proactive Hazard Elimination',
      desc: 'We utilize the Hierarchy of Controls to eliminate operational risks at the source, prioritizing engineering controls and safe process design over procedural workarounds.',
      icon: AlertTriangle,
    },
    {
      num: '04',
      title: 'Environmental Stewardship & Sustainability',
      desc: 'We minimize our ecological footprint through material efficiency across metals and polymers, manufacturing waste reduction, energy/water conservation, and responsible chemical management.',
      icon: Leaf,
    },
    {
      num: '05',
      title: 'Global Standard Compliance',
      desc: 'We strictly adhere to all local and international HSE regulations, aligning our systems with global benchmarks including ISO 45001 and ISO 14001.',
      icon: Globe2,
    },
    {
      num: '06',
      title: 'Culture of Learning & Continuous Improvement',
      desc: 'We invest in ongoing HSE education, thorough incident investigations, transparent tracking, and routine third-party audits to raise industry standards every year.',
      icon: BookOpen,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (statementLeftRef.current) {
        gsap.fromTo(
          statementLeftRef.current,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statementLeftRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (statementRightRef.current) {
        gsap.fromTo(
          statementRightRef.current,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statementRightRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (pillarsHeaderRef.current) {
        gsap.fromTo(
          pillarsHeaderRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: pillarsHeaderRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (pillarCardsRef.current.length > 0) {
        gsap.fromTo(
          pillarCardsRef.current,
          { y: 35, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: pillarCardsRef.current[0],
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (commitmentRef.current) {
        gsap.fromTo(
          commitmentRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: commitmentRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="policy-page-wrapper">
      <Header />

      {/* Hero Banner */}
      <PageHero
        title="HSE POLICY"
        subtitle="Health, Safety, and Environmental Policy Statement – Operating under one non-negotiable philosophy: Zero Harm."
        bgImage="/images/banner/txco-page-banner.avif"
        bgPosition="center bottom"
      />

      <main>
        {/* 1. Policy Statement Section */}
        <section className="policy-statement-section">
          <div className="policy-container">
            <div className="policy-split-grid">
              {/* Left Column: HSE Statement */}
              <div ref={statementLeftRef} className="policy-split-left">

                <h1 className="policy-main-title">
                  TXCO Sealing Products – Health, Safety, and Environmental (HSE) Policy Statement
                </h1>

                <p className="policy-lead-text">
                  At TXCO Sealing Products, high-performance engineering never comes at the cost of human safety or environmental integrity.
                </p>

                <p className="policy-lead-text">
                  We operate under one non-negotiable philosophy: <strong>Zero Harm</strong>—zero work-related injuries, zero occupational illnesses, and zero preventable environmental incidents.
                </p>

                {/* Callout Card */}

              </div>

              {/* Right Column: HSE Safety Image */}
              <div ref={statementRightRef} className="policy-split-right">
                <div className="policy-img-wrapper">
                  <img
                    src="/images/hse-policy-safety.jpg"
                    alt="TXCO Health, Safety, and Environmental Inspection"
                    className="policy-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Core HSE Pillars */}
        <section className="policy-pillars-section">
          <div className="policy-container">
            <div ref={pillarsHeaderRef} className="policy-section-header">

              <h2 className="policy-section-title">Core HSE Pillars</h2>
              <p className="policy-section-subtitle">
                The institutional principles that govern our operations, safety culture, and environmental leadership.
              </p>
            </div>

            <div className="policy-pillars-grid">
              {hsePillars.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={idx}
                    ref={addToPillarCardsRef}
                    className="policy-pillar-card"
                  >
                    <div className="policy-pillar-icon-box">
                      <IconComponent size={24} strokeWidth={2.2} />
                    </div>

                    <h3 className="policy-pillar-title">{p.title}</h3>
                    <p className="policy-pillar-desc">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Commitment to Stakeholders Section */}
        <section className="policy-commitment-section">
          <div className="policy-container">
            <div ref={commitmentRef} className="policy-commitment-box">
              <div className="policy-commitment-box-top-bar" />
              <h2 className="policy-commitment-title">
                Our Commitment to Stakeholders
              </h2>
              <p className="policy-commitment-text">
                Integrity is manufactured into every seal we deliver. By maintaining a safe workplace and prioritizing environmental responsibility, we ensure our team returns home safely every day, our clients receive sustainable solutions, and our communities thrive alongside us.
              </p>
            </div>
          </div>
        </section>



        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

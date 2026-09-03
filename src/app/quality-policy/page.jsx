'use client';

import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import '@/styles/policy-pages.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function QualityPolicyPage() {
  const statementLeftRef = useRef(null);
  const statementRightRef = useRef(null);
  const commitmentRef = useRef(null);

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
        title="QUALITY POLICY"
        subtitle="Engineering absolute duty into every seal to deliver zero-defect pipeline integrity in extreme-pressure environments."
        bgImage="/images/banner/txco-page-banner.avif"
        bgPosition="center bottom"
      />

      <main>
        {/* 1. Policy Statement Section */}
        <section className="policy-statement-section">
          <div className="policy-container">
            <div className="policy-split-grid">
              {/* Left Column: Quality Policy Narrative */}
              <div ref={statementLeftRef} className="policy-split-left">
                <h1 className="policy-main-title">
                  TXCO Quality Policy – Engineering Absolute Duty
                </h1>

                <p className="policy-lead-text">
                  At TXCO Sealing Products Private Limited, quality is an absolute duty engineered into every industrial gasket, forged flange, and valve component to deliver zero-defect pipeline integrity in extreme-pressure environments.
                </p>

                <p className="policy-lead-text">
                  Operating under a &ldquo;Right First Time, Every Time&rdquo; philosophy, our manufacturing strictly aligns with ASME, API 6A/6D, NACE MR0175, and ISO 9001 standards. We enforce 100% Material Identification, strict Brinell/Rockwell hardness limits, and EN 10204 3.1 heat-lot traceability to guarantee flaw-free metallurgical excellence.
                </p>

                <p className="policy-lead-text">
                  By pairing custom precision engineering with expert technical support and dependable delivery, TXCO ensures every seal & Products which we manufacture protects human lives, safeguards critical infrastructure, and preserves the environment worldwide.
                </p>
              </div>

              {/* Right Column: Quality Inspection Image */}
              <div ref={statementRightRef} className="policy-split-right">
                <div className="policy-img-wrapper">
                  <img
                    src="/images/quality-policy-inspection.jpg"
                    alt="TXCO Precision Quality Inspection & Metrology"
                    className="policy-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Commitment to Global Stakeholders */}
        <section className="policy-commitment-section">
          <div className="policy-container">
            <div ref={commitmentRef} className="policy-commitment-box">
              <div className="policy-commitment-box-top-bar" />
              <h2 className="policy-commitment-title">
                Preserving Human Lives, Infrastructure & The Environment
              </h2>
              <p className="policy-commitment-text">
                Where total reliability is non-negotiable, TXCO products deliver peace of mind when system pressures reach their peak. Through uncompromised metallurgical standards, continuous quality auditing, and responsive customer partnership, we protect mission-critical operations across oil & gas, refining, petrochemical, and power generation networks across the globe.
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

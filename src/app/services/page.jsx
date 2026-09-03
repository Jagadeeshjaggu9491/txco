'use client';

import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import IndustrySolutions from '@/components/IndustrySolutions';
import StickyServicesSection from '@/components/services/StickyServicesSection';
import { servicesOverview } from '@/data/servicesData';
import '@/styles/services.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  const introLeftRef = useRef(null);
  const introRightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (introLeftRef.current) {
        gsap.fromTo(
          introLeftRef.current,
          { x: -35, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: introLeftRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (introRightRef.current) {
        gsap.fromTo(
          introRightRef.current,
          { x: 35, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: introRightRef.current,
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
    <div className="services-page-wrapper">
      <Header />

      {/* Hero Banner */}
      <PageHero
        title="SPECIALIZED ENGINEERING & FIELD SERVICES"
        subtitle="We back our manufacturing with high-level metallurgical and mechanical engineering support to optimize joint integrity and eliminate premature failure."
        bgImage="/images/banner/txco-page-banner.avif"
        bgPosition="center bottom"
      />

      <main>
        {/* 1. Services Executive Overview Section */}
        <section className="services-intro-section">
          <div className="services-container">
            <div className="row align-items-center g-4 g-lg-5">
              {/* Left Column: Narrative & Stats */}
              <div ref={introLeftRef} className="col-lg-6">
                <h1 className="services-main-title">
                  {servicesOverview.company} – {servicesOverview.title}
                </h1>
                <p className="services-lead-text">
                  {servicesOverview.lead}
                </p>
              </div>

              {/* Right Column: High-Impact Service Image */}
              <div ref={introRightRef} className="col-lg-6 services-intro-img-col">
                <div className="services-intro-img-wrapper">
                  <img
                    src="/images/services-img.avif"
                    alt="TXCO Specialized Engineering & Field Services"
                    className="services-intro-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Sticky Stacking Services Section with Alternating Cards */}
        <StickyServicesSection
          title="Core Engineering & Field Disciplines"
          subtitle="Explore our specialized technical capabilities designed around industrial gaskets, forged flanges, and severe-service valve components."
        />



        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

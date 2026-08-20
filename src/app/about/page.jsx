'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import AboutHero from '@/components/about/AboutHero';
import AboutMissionVisionValues from '@/components/about/AboutMissionVisionValues';
import AboutBrochure from '@/components/about/AboutBrochure';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero Banner (Image 1) */}
        <AboutHero />

        {/* Section 2: Mission, Vision & 3x3 Values Grid (Image 2) */}
        <AboutMissionVisionValues />

        {/* Section 3: Company Overview Brochure (Image 3) */}
        <AboutBrochure />

        {/* Global Contact Section */}
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </>
  );
}

'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import ResourcesHero from '@/components/resources/ResourcesHero';
import ResourcesGrid from '@/components/resources/ResourcesGrid';

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Step 1: Hero Banner (Image 1) */}
        <ResourcesHero />

        {/* Step 2: Latest Resources & Interactive Filters (Image 2) */}
        <ResourcesGrid />

        {/* Global Contact CTA Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

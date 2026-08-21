'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import FaqsHero from '@/components/faqs/FaqsHero';
import FaqsAccordion from '@/components/faqs/FaqsAccordion';

export default function FaqsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Step 1: Hero Section */}
        <FaqsHero />

        {/* Step 2: Interactive FAQs & Support Sidebar */}
        <FaqsAccordion />

        {/* Step 3: Global Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

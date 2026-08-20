'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import CertificationsHero from '@/components/certifications/CertificationsHero';
import CertificationsGrid from '@/components/certifications/CertificationsGrid';

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Step 1: Hero Banner (Image 1) */}
        <CertificationsHero />

        {/* Step 2: Certificates Grid (Image 2) */}
        <CertificationsGrid />

        {/* Global Contact CTA Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

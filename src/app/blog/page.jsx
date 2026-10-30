'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogHero from '@/components/blog/BlogHero';
import GasketSelectionGuide from '@/components/blog/GasketSelectionGuide';
import BlogList from '@/components/blog/BlogList';

export default function BlogPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '85vh' }}>
        {/* Top Hero Banner */}
        <BlogHero />

        {/* First Section: Interactive Gasket Selection Guide & Sizing Tool */}
        <GasketSelectionGuide />

        {/* Second Section: Articles List & Categories */}
        <BlogList />
      </main>
      <Footer />
    </>
  );
}

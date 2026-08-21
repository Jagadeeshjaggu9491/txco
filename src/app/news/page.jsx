'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import NewsHero from '@/components/news/NewsHero';
import NewsList from '@/components/news/NewsList';

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Step 1: Hero Section */}
        <NewsHero />

        {/* Step 2: Interactive News List & Press Banner */}
        <NewsList />

        {/* Step 3: Global Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

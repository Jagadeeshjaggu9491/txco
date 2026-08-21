'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import BlogHero from '@/components/blog/BlogHero';
import BlogList from '@/components/blog/BlogList';

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Step 1: Hero Section */}
        <BlogHero />

        {/* Step 2: Articles List & Categories */}
        <BlogList />

        {/* Step 3: Global Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

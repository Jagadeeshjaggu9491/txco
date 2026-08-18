'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import ProductsHero from '@/components/products/ProductsHero';
import OurProductsOverview from '@/components/products/OurProductsOverview';
import IndustrialSealingProducts from '@/components/products/IndustrialSealingProducts';
import DiscoverEngineeredSolutions from '@/components/products/DiscoverEngineeredSolutions';

export default function ProductsMainPage() {
  return (
    <>
      <Header />
      <main>
        {/* Step 1: Hero Banner Section (Screenshot 1) */}
        <ProductsHero />

        {/* Step 2: Our Products 3-Card Grid Section (Screenshot 2) */}
        <OurProductsOverview />

        {/* Step 3: Industrial Sealing Products Info Cards Section (Screenshot 3) */}
        <IndustrialSealingProducts />

        {/* Step 4: Discover Our Engineered Solutions Section (Screenshot 4) */}
        <DiscoverEngineeredSolutions />

        {/* Global Contact CTA Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

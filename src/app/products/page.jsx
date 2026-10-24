'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { productsHeroData } from '@/data/productsData';
import OurProductsOverview from '@/components/products/OurProductsOverview';
import IndustrialSealingProducts from '@/components/products/IndustrialSealingProducts';
import DiscoverEngineeredSolutions from '@/components/products/DiscoverEngineeredSolutions';

export default function ProductsMainPage() {
  return (
    <>
      <Header />
      <main>
        {/* Step 1: Hero Banner Section with product-details-page-banner */}
        <PageHero
          title={productsHeroData.title || 'TXCO SEALING'}
          subtitle={productsHeroData.subtitle}
          bgImage="/images/product-details-page-banner.avif"
          bgPosition="center"
        />

        {/* Step 2: Our Products 3-Card Grid Section (Screenshot 2) */}
        <OurProductsOverview />

        {/* Step 3: Industrial Sealing Products Info Cards Section (Screenshot 3) */}
        <IndustrialSealingProducts />

        {/* Step 4: Discover Our Engineered Solutions Section (Screenshot 4) */}
        <DiscoverEngineeredSolutions />
      </main>
      <Footer />
    </>
  );
}

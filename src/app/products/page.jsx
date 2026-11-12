'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { productsHeroData } from '@/data/productsData';
import OurProductsOverview from '@/components/products/OurProductsOverview';
import IndustrialSealingProducts from '@/components/products/IndustrialSealingProducts';

export default function ProductsMainPage() {
  return (
    <>
      <Header />
      <main>
        {/* Step 1: Hero Banner Section with product-page-banner */}
        <PageHero
          title={productsHeroData.title || 'TXCO SEALING'}
          subtitle={productsHeroData.subtitle}
          bgImage="/images/title-section/product-page-banner.avif"
          bgMobileImage="/images/title-section/product-page-banner-mobile.avif"
          bgPosition="center"
        />

        {/* Step 2: Our Products 3-Card Grid Section (Screenshot 2) */}
        <OurProductsOverview />

        {/* Step 3: Industrial Sealing Products Info Cards Section (Screenshot 3) */}
        <IndustrialSealingProducts />
      </main>
      <Footer />
    </>
  );
}

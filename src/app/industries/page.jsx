import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import IndustriesWeServe from '@/components/IndustriesWeServe';
import IndustrialSealingProducts from '@/components/products/IndustrialSealingProducts';
import DiscoverEngineeredSolutions from '@/components/products/DiscoverEngineeredSolutions';

export const metadata = {
  title: 'Industries We Serve | TXCO Advanced Sealing Technologies',
  description:
    'TXCO provides engineered sealing solutions, metallic gaskets, flanges, and specialty bolting for Oil & Gas, Chemical, Power Generation, Renewable Energy, and EPC sectors globally.',
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '85vh' }}>
        {/* Top Hero Banner */}
        <PageHero
          title="Industries we serve "
          subtitle="Engineering high-integrity sealing, metallic gasket, flange, and bolting solutions tailored to the world's most critical industrial operating environments."
          bgImage="/images/CHEMICAL-INDUSTRY-banner.avif"
          bgPosition="center"
        />

        {/* Industries Grid Section */}
        <IndustriesWeServe />



      </main>
      <Footer />
    </>
  );
}

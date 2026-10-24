import Header from '@/components/Header';
import HeroVideoClipSection from '@/components/HeroVideoClipSection';
import HeroBrandSection from '@/components/HeroBrandSection';
import HeroRingsSection from '@/components/HeroRingsSection';
import VideoHeroTwo from '@/components/VideoHeroTwo';
import VideoHero from '@/components/VideoHero';
import HeroSlider from '@/components/HeroSlider';
import BannerSection from '@/components/BannerSection';
import EngineeredSolutions from '@/components/EngineeredSolutions';
import IndustriesWeServe from '@/components/IndustriesWeServe';
import ProductsCategorySlider from '@/components/ProductsCategorySlider';
import IndustrySolutions from '@/components/IndustrySolutions';
import OfferingsGlanceSection from '@/components/OfferingsGlanceSection';
import Footer from '@/components/Footer';
import StickyServicesSection from '@/components/services/StickyServicesSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Active Hero: Factory Background with Clipped Chevron Video */}
        <HeroVideoClipSection />
        {/* Alternative Hero 4: <HeroBrandSection /> */}
        {/* Alternative Hero 3: <HeroRingsSection /> */}
        {/* Alternative Hero 2: <VideoHeroTwo /> */}
        {/* Alternative Hero 1: <VideoHero /> */}
        {/* <BannerSection /> */}
        <EngineeredSolutions />
        {/* <StickyServicesSection /> */}
        <IndustriesWeServe />
        <ProductsCategorySlider />
        <IndustrySolutions />
        {/* Redesigned Offerings at a Glance + Sealing Solutions CTA Section on top of Prefooter */}
        <OfferingsGlanceSection />
      </main>
      <Footer />
    </>
  );
}

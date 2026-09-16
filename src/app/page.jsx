import Header from '@/components/Header';
import VideoHero from '@/components/VideoHero';
import HeroSlider from '@/components/HeroSlider';
import BannerSection from '@/components/BannerSection';
import EngineeredSolutions from '@/components/EngineeredSolutions';
import IndustriesWeServe from '@/components/IndustriesWeServe';
import SustainabilitySection from '@/components/SustainabilitySection';
import ProductsCategorySlider from '@/components/ProductsCategorySlider';
import IndustrySolutions from '@/components/IndustrySolutions';
import OfferingsGlanceSection from '@/components/OfferingsGlanceSection';
import CustomerTestimonials from '@/components/CustomerTestimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StickyServicesSection from '@/components/services/StickyServicesSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <VideoHero />
        {/* <BannerSection /> */}
        <EngineeredSolutions />
        {/* <StickyServicesSection /> */}
        <IndustriesWeServe />
        <SustainabilitySection />
        <ProductsCategorySlider />
        <IndustrySolutions />
        <OfferingsGlanceSection />
        <CustomerTestimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

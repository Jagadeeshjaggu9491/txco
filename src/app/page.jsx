import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import BannerSection from '@/components/BannerSection';
import EngineeredSolutions from '@/components/EngineeredSolutions';
import IndustriesWeServe from '@/components/IndustriesWeServe';
import IndustrySolutions from '@/components/IndustrySolutions';
import CustomManufacturer from '@/components/CustomManufacturer';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <BannerSection />
        <EngineeredSolutions />
        <IndustriesWeServe />
        <IndustrySolutions />
        <CustomManufacturer />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

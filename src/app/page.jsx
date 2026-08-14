import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import BannerSection from '@/components/BannerSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <BannerSection />
      </main>
      <Footer />
    </>
  );
}

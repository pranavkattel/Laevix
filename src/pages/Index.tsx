import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { TeamSection } from '@/components/TeamSection';
import { WorkSection } from '@/components/WorkSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300" itemScope itemType="https://schema.org/WebPage">
      <Header />
      <main role="main" aria-label="Main Content">
        {/* Hidden H1 for SEO */}
        <h1 className="sr-only">Laevix - Leading AI Tech Company and Website Development Agency in Nepal | AI Solutions, Custom Software, Digital Transformation</h1>
        
        <HeroSection />
        <div className="h-32 md:h-40 bg-neutral-200 dark:bg-black transition-colors duration-300" />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


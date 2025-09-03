import Navbar from '@/features/navigation/components/Navbar';
import AboutSection from '@/features/sections/components/AboutSection';
import ContactSection from '@/features/sections/components/ContactSection';
import HeroBanner from '@/features/sections/components/HeroBanner';
import ProjectsSection from '@/features/sections/components/ProjectsSection';
import ServicesSection from '@/features/sections/components/ServicesSection';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      <Navbar />
      <main id="main" className="h-full focus:outline-none">
        <HeroBanner />

        <AboutSection />

        <ProjectsSection />

        <ServicesSection />

        <ContactSection />
      </main>
    </div>
  );
}

import Navbar from '@/features/navigation/components/Navbar';
import AboutSection from '@/features/sections/components/AboutSection';
import HeroBanner from '@/features/sections/components/HeroBanner';
import ProjectsSection from '@/features/sections/components/ProjectsSection';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      <Navbar />
      <main id="main" className="h-full focus:outline-none">
        <HeroBanner />

        <AboutSection />

        <ProjectsSection />

        <div className="h-screen" id="services">
          Serviços
        </div>
        <div className="h-screen" id="contact">
          Contato
        </div>
      </main>
    </div>
  );
}

import Navbar from '@/features/navigation/components/Navbar';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="h-full">
        <div className="h-screen" id="about">
          Sobre
        </div>
        <div className="h-screen" id="projects">
          Projetos
        </div>
        <div className="h-screen" id="services">
          Serviços
        </div>
        <div className="h-screen" id="contact">
          Contato
        </div>
      </div>
    </div>
  );
}

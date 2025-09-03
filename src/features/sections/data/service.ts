import {
  CheckCircle,
  Database,
  Globe,
  Lightbulb,
  Link,
  Palette,
} from 'lucide-react';

export const service = {
  headline: [
    { text: 'Como podemos', highlight: false },
    { text: 'ajudar', highlight: true },
  ],
  description:
    'Transformamos suas ideias em soluções digitais que realmente fazem a diferença.',
  services: [
    {
      title: 'Desenvolvimento Web',
      description:
        'Criação de sites e aplicações web responsivas, rápidas e otimizadas para todos os dispositivos.',
      icon: Globe,
    },
    {
      title: 'APIs & Integrações',
      description:
        'Desenvolvimento de APIs e integrações sob medida para conectar sistemas e automatizar processos.',
      icon: Link,
    },
    {
      title: 'UI/UX Design',
      description:
        'Prototipação e design de interfaces focadas em usabilidade e experiência do usuário.',
      icon: Palette,
    },
    {
      title: 'Banco de Dados',
      description:
        'Modelagem, implementação e otimização de bancos de dados escaláveis e seguros.',
      icon: Database,
    },
    {
      title: 'Testes & Manutenção',
      description:
        'Testes automatizados, monitoramento e manutenção contínua para garantir segurança e performance.',
      icon: CheckCircle,
    },
    {
      title: 'Consultoria Técnica',
      description:
        'Apoio estratégico e técnico para transformar ideias em soluções digitais escaláveis.',
      icon: Lightbulb,
    },
  ],
};

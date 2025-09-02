import { Bird, Code, Lightbulb } from 'lucide-react';

export const about = {
  headline: [
    { text: 'Nosso', highlight: false },
    { text: 'manifesto', highlight: true },
  ],
  description: 'Acreditamos em design acessível, escalável e humano',
  manifest: {
    headline: '"Aqui, a programação não é o fim — é o começo do voo."',
    description: [
      'No The Pigeon Lab acreditamos que código é apenas uma forma de expressar ideias. O que realmente importa é como essas ideias voam e transformam a experiência das pessoas.',
      'Cada projeto é uma oportunidade de criar algo que não apenas funciona, mas que conecta, inspira e capacita usuários de todas as habilidades.',
      'Nosso compromisso vai além do código: desenvolvemos soluções que são acessíveis por design, escaláveis por necessidade, e humanas por princípio.',
    ],
  },
  cards: [
    {
      title: 'Ideias em Primeiro Lugar',
      description:
        'Não começamos pelo código. Começamos pela compreensão profunda do problema e pela busca da melhor solução.',
      icon: Lightbulb,
    },
    {
      title: 'Código como Ferramenta',
      description:
        'A programação é nossa linguagem, não nosso objetivo. Usamos a tecnologia para dar vida às suas ideias.',
      icon: Code,
    },
    {
      title: 'Soluções que Voam',
      description:
        'Criamos produtos digitais que não apenas funcionam, mas que realmente fazem a diferença na vida das pessoas.',
      icon: Bird,
    },
  ],
  cta: 'Vamos conversar',
};

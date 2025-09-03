export const project = {
  headline: [
    { text: 'Projetos em', highlight: false },
    { text: 'Destaque', highlight: true },
  ],
  description:
    'Uma seleção dos meus trabalhos recentes, mostrando diferentes tecnologias e abordagens de design.',
  projects: [
    {
      title: 'Bookspace',
      description:
        'Aplicativo de gestão de espaços que permite verificar disponibilidade e reservar salas e ambientes de forma simples e direta, eliminando planilhas e comunicações complexas.',
      image: '/projects/bookspace.gif',
      tags: ['Typescript', 'NodeJS', 'NextJS', 'Prisma', 'Jest', 'Fastify'],
      githubUrl: 'https://github.com/JulioC090/book-space',
    },
    {
      title: 'Commit Generator',
      description:
        'Commit Generator é uma ferramenta que utiliza IA para gerar mensagens de commit automaticamente a partir das alterações no código.',
      image: '/projects/commit-generator.gif',
      tags: ['Typescript', 'NodeJS', 'Git'],
      liveUrl: 'https://www.npmjs.com/package/@commit-generator/cli',
      githubUrl: 'https://github.com/JulioC090/commit-generator',
    },
    {
      title: 'Weather Forecast',
      description:
        'Website que exibe clima em tempo real de qualquer cidade, com dados precisos de temperatura e previsão do tempo',
      image: '/projects/weather-forecast.gif',
      tags: ['Vite', 'React', 'Typescript', 'CSS3'],
      liveUrl: 'https://julioc090.github.io/weather-forecast/',
      githubUrl: 'https://github.com/JulioC090/weather-forecast',
    },
    {
      title: 'Portfolio',
      description:
        'Meu Portfolio minimalista para showcasing de trabalhos criativos, com animações suaves, performance otimizada e design responsivo.',
      image: '/projects/portfolio.png',
      tags: ['NextJS', 'Motion', 'Shadcn', 'Typescript'],
      githubUrl: 'https://github.com/JulioC090/portfolio',
    },
  ],
  more: 'Ver mais projetos',
};

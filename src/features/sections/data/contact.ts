import InstagramIcon from '@/components/InstagramIcon';
import LinkedInIcon from '@/components/LinkedInIcon';
import { Mail } from 'lucide-react';

export const contact = {
  headline: [
    { text: 'Vamos trabalhar', highlight: false },
    { text: 'juntos?', highlight: true },
  ],
  description:
    'Estou sempre em busca de novos desafios e projetos interessantes. Se você tem uma ideia, vamos conversar sobre como podemos dar asas a esse projeto.',
  quickLinks: [
    {
      title: 'Email direto',
      action: 'Enviar Email',
      link: { href: 'mailto:contato.magnify566@passinbox.com', blank: false },
      icon: Mail,
    },
    {
      title: 'LinkedIn',
      action: 'Conectar',
      link: { href: 'https://www.linkedin.com/in/julioc090/', blank: true },
      icon: LinkedInIcon,
    },
    {
      title: 'Instagram',
      action: 'Seguir',
      link: { href: 'https://www.instagram.com/thepigeonlab/', blank: true },
      icon: InstagramIcon,
    },
  ],
  toast: {
    success: {
      title: 'Mensagem enviada com sucesso! 🎉',
      description: 'Respondo em até 24 horas. Obrigado pelo contato!',
    },
    error: {
      title: 'Erro ao enviar mensagem',
      description: 'Tente novamente ou entre em contato diretamente.',
    },
  },
  availability:
    'Normalmente respondo em até 24 horas • Disponível para projetos freelance',
};

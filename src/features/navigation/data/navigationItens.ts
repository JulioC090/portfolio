import { NavItem } from '@/features/navigation/types/INavItem';

export const navigationMap = {
  about: { name: 'Sobre', href: '#about', anchor: true },
  projects: { name: 'Projetos', href: '#projects', anchor: true },
  services: { name: 'Serviços', href: '#services', anchor: true },
  contact: { name: 'Contato', href: '#contact', anchor: true },
};

export const navigationItens: NavItem[] = Object.values(navigationMap);

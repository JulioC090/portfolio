'use client';

import { IconToggleButton } from '@/components/IconToggleButton';
import Logo from '@/components/Logo';
import { MobileMenu } from '@/features/navigation/components/MobileMenu';
import NavLink from '@/features/navigation/components/NavLink';
import SkipLink from '@/features/navigation/components/SkipLink';
import { navigationItens } from '@/features/navigation/data/navigationItens';
import { useAnchorNavigation } from '@/features/navigation/hooks/useAnchorNavigation';
import useIsScrolled from '@/features/navigation/hooks/useIsScrolled';
import ThemeToggleButton from '@/features/theme/components/ThemeToggleButton';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { isScrolled } = useIsScrolled();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNavClick = useAnchorNavigation();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <SkipLink to="main" />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 z-50 w-full backdrop-blur-md border-b',
          isScrolled
            ? 'bg-background/80 border-border shadow-sm py-3'
            : 'bg-background/60 border-transparent py-4',
        )}
      >
        <div className="container-narrow mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 group focusable rounded-lg p-1 hover:scale-101"
          >
            <Logo className="h-8 w-8 transition-transform duration-200" />
            <span className="text-xl font-bold text-foreground tracking-tight">
              Pigeon&apos;s Lab
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigationItens.map((item) => (
              <NavLink key={item.name} item={item} onClick={handleNavClick} />
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggleButton />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggleButton />
            <IconToggleButton
              iconOn={<X />}
              iconOff={<Menu />}
              active={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            />
          </div>
        </div>

        <MobileMenu
          navigation={navigationItens}
          isOpen={isMenuOpen}
          onNavClick={handleNavClick}
        />
      </motion.header>
    </>
  );
}

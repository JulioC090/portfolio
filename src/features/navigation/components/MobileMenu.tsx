import NavLink from '@/features/navigation/components/NavLink';
import { NavItem } from '@/features/navigation/types/INavItem';
import { AnimatePresence, motion } from 'motion/react';

interface MobileMenuProps {
  isOpen: boolean;
  navigation: NavItem[];
  onNavClick: (href: string, anchor?: boolean) => void;
}

export function MobileMenu({
  isOpen,
  navigation,
  onNavClick,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="md:hidden mt-4 pb-4 px-4 border-t border-border/50"
          role="dialog"
          aria-label="Mobile navigation"
          tabIndex={-1}
        >
          <div className="flex flex-col space-y-2 mt-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                item={item}
                onClick={onNavClick}
                className="py-3 w-full px-4 rounded-2xl hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
              />
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

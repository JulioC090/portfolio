import { usePathname } from 'next/navigation';
import { useCallback } from 'react';

export function useAnchorNavigation() {
  const pathname = usePathname();

  const handleNavClick = useCallback(
    (href: string, anchor?: boolean) => {
      if (anchor && pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    [pathname],
  );

  return handleNavClick;
}

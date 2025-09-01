'use client';

import { IconToggleButton } from '@/components/IconToggleButton';
import { useTheme } from '@/features/theme/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <IconToggleButton
      iconOn={<Sun />}
      iconOff={<Moon />}
      active={resolvedTheme === 'light'}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    />
  );
}

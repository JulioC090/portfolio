'use client';

import { IconToggleButton } from '@/components/IconToggleButton';
import { useTheme } from '@/features/theme/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();

  if (!resolvedTheme) {
    return null;
  }

  const isLight = resolvedTheme === 'light';

  return (
    <IconToggleButton
      iconOn={<Sun />}
      iconOff={<Moon />}
      active={isLight}
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      aria-label="Toggle theme"
    />
  );
}

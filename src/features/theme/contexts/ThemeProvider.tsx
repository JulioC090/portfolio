'use client';

import { ThemeContext } from '@/features/theme/contexts/ThemeContext';
import { ITheme } from '@/features/theme/types/ITheme';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ITheme;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'portfolio-theme',
  ...props
}: ThemeProviderProps) {
  const [storedTheme, setStoredTheme] = useLocalStorage<ITheme>(
    storageKey,
    defaultTheme,
  );
  const [resolvedTheme, setResolvedTheme] = useState<ITheme>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    let appliedTheme: ITheme = storedTheme;

    if (storedTheme === 'system') {
      appliedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }

    root.classList.add(appliedTheme);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResolvedTheme(appliedTheme);
  }, [storedTheme]);

  const value = {
    theme: storedTheme,
    resolvedTheme,
    setTheme: (theme: ITheme) => setStoredTheme(theme),
  };

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

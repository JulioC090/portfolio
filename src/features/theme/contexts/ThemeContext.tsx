import { ITheme } from '@/features/theme/types/ITheme';
import { createContext } from 'react';

type ThemeProviderState = {
  theme: ITheme;
  resolvedTheme?: ITheme;
  setTheme: (theme: ITheme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

export const ThemeContext = createContext<ThemeProviderState>(initialState);

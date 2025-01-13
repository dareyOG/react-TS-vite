import React, { createContext, useContext } from 'react';
import { theme } from './theme';

type ThemeProvider = {
  children: React.ReactNode;
};

type Theme = {
  primary: { main: string; text: string };
  secondary: { main: string; text: string };
};

const ThemeContext = createContext<Theme | null>(null);

export function ThemeProvider({ children }: ThemeProvider) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('context is placed outside of useTheme scope');

  return context;
}

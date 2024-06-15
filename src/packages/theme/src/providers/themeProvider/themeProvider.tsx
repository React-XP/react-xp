import type React from 'react';
import { ThemeContext } from 'src/contexts/themeContext';

interface ThemeProviderProps {
  theme: 'light' | 'dark';
  children: React.ReactNode;
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

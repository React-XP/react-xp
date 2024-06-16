import type React from 'react';
interface ThemeProviderProps {
  theme: 'light' | 'dark';
  children: React.ReactNode;
}
export declare const ThemeProvider: ({
  children,
  theme,
}: ThemeProviderProps) => import('react/jsx-runtime').JSX.Element;

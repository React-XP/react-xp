import React from 'react';
import { theme } from '../../constants/theme';
import { ThemeContext } from '../../contexts/themeContext';
import type { TAvailableTheme } from '../../types/theme';

type TThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: TAvailableTheme;
  storageKey?: string;
};

export const ThemeProvider = ({
  children,
  defaultTheme = 'light',
  storageKey = 'react-xp-theme',
}: TThemeProviderProps) => {
  const [themeName, setThemeName] = React.useState<TAvailableTheme>(
    () => (localStorage.getItem(storageKey) as TAvailableTheme) || defaultTheme,
  );

  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (themeName === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(themeName);
  }, [themeName]);

  const providerValue = {
    theme: theme,
    themeName,
    setThemeName: (themeName: TAvailableTheme) => {
      localStorage.setItem(storageKey, themeName);
      setThemeName(themeName);
    },
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};

import React from 'react';
import { type TTheme, ThemeContext } from '../../contexts/themeContext';

type TThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: TTheme;
  storageKey?: string;
};

export const ThemeProvider = ({
  children,
  defaultTheme = 'light',
  storageKey = 'react-xp-theme',
}: TThemeProviderProps) => {
  const [theme, setTheme] = React.useState<TTheme>(
    () => (localStorage.getItem(storageKey) as TTheme) || defaultTheme,
  );

  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const providerValue = {
    theme,
    setTheme: (theme: TTheme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};

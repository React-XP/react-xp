import React from 'react';
import { theme } from '../../constants/theme';
import type { TAvailableTheme, TTheme } from '../../types/theme';

type TThemeContext = {
  theme: TTheme;
  themeName: TAvailableTheme;
  setThemeName: (theme: TAvailableTheme) => void;
};

export const ThemeContext = React.createContext<TThemeContext>({
  theme: theme,
  themeName: 'light',
  setThemeName: () => {},
});

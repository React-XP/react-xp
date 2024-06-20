import React from 'react';
import type { AVAILABLE_THEMES } from '../../constants/theme';

export type TTheme = (typeof AVAILABLE_THEMES)[number];

type TThemeContext = {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
};

export const ThemeContext = React.createContext<TThemeContext>({
  theme: 'light',
  setTheme: () => {},
});

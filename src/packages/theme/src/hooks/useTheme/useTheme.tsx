import React from 'react';
import { AVAILABLE_THEMES } from '../../constants/theme';
import { ThemeContext } from '../../contexts/themeContext/themeContext';

export const useTheme = () => {
  const themeContext = React.useContext(ThemeContext);

  if (themeContext === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return { ...themeContext, availableThemes: AVAILABLE_THEMES };
};

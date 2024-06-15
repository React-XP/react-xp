import React from 'react';
import { ThemeContext } from 'src/contexts/themeContext';

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

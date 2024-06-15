import { ThemeContext } from '@/contexts/themeContext';
import React from 'react';

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

import React from 'react';
import { ThemeContext } from '../../contexts/themeContext';

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

import { jsx as _jsx } from 'react/jsx-runtime';
import { ThemeContext } from '../../contexts/themeContext';
export const ThemeProvider = ({ children, theme }) => {
  return _jsx(ThemeContext.Provider, { value: { theme }, children: children });
};

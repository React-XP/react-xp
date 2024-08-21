import type { TAvailableTheme, TTheme } from '../types/theme';

export const AVAILABLE_THEMES: Array<TAvailableTheme> = [
  'dark',
  'light',
  'system',
] as const;

export const theme: TTheme = {
  breakpoints: {
    xs: { min: 0, max: 639 },
    sm: { min: 640, max: 767 },
    md: { min: 768, max: 1023 },
    lg: { min: 1024, max: 1279 },
    xl: { min: 1280, max: 1535 },
    '2xl': { min: 1536, max: 99999 },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 40,
  },
};

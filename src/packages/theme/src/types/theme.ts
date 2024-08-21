import type { TBreakpoint } from './breakpoint';

export type TAvailableTheme = 'dark' | 'light' | 'system';

export type TTheme = {
  spacing: Record<TBreakpoint, number>;
  breakpoints: Record<TBreakpoint, { min: number; max: number }>;
};

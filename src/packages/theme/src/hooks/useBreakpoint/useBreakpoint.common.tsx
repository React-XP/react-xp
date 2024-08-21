import type { TBreakpoint } from '../../types/breakpoint';
import { useTheme } from '../useTheme';

export const useBreakpointCommon = (width: number) => {
  const { theme } = useTheme();
  let currentBreakpoint: TBreakpoint | undefined;

  for (const breakpoint of Object.keys(theme.breakpoints)) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const { min, max } = (theme.breakpoints as any)[breakpoint];

    if (width >= min && width <= max) {
      currentBreakpoint = breakpoint as TBreakpoint;
    }
  }

  return {
    currentBreakpoint,
    spacing: currentBreakpoint ? theme.spacing[currentBreakpoint] : 1,
  };
};

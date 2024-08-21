import { useBreakpointCommon } from './useBreakpoint.common';

export const useBreakpoint = () => {
  const width = window.innerWidth;

  return useBreakpointCommon(width);
};

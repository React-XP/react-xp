import { Dimensions } from 'react-native';
import { useBreakpointCommon } from './useBreakpoint.common';

export const useBreakpoint = () => {
  const width = Dimensions.get('window').width;

  return useBreakpointCommon(width);
};

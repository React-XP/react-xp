import React from 'react';
import type { TComponentBaseProps } from '../../types/components';
import { Box } from '../box';

type TColumnProps = TComponentBaseProps & {
  id?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
};

export const Column = React.forwardRef((props: TColumnProps, ref) => {
  return <Box ref={ref} {...props} orientation="vertical" />;
});

Column.displayName = 'Column';

import React from 'react';
import type { TComponentBaseProps } from '../../types/components';
import { Box } from '../box';

type TRowProps = TComponentBaseProps & {
  id?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
};

export const Row = React.forwardRef((props: TRowProps, ref) => {
  return <Box ref={ref} {...props} orientation="horizontal" />;
});

Row.displayName = 'Row';

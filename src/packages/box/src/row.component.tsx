import React from 'react';
import { Box } from './box.component';

type TRowProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
};

export const Row = React.forwardRef((props: TRowProps, ref) => {
  return <Box ref={ref} {...props} orientation="horizontal" />;
});

Row.displayName = 'Row';

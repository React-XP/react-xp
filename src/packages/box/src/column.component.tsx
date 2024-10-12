import React from 'react';
import { Box } from './box.component';

type TColumnProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
};

export const Column = React.forwardRef((props: TColumnProps, ref) => {
  return <Box ref={ref} {...props} orientation="vertical" />;
});

Column.displayName = 'Column';

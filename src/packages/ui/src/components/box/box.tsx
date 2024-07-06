import { cn } from '@react-xp/core/tailwind';
import React from 'react';

type TBoxProps = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  orientation?: 'horizontal' | 'vertical';
  ref?: React.RefObject<HTMLDivElement | null>;
};

export const Box = React.forwardRef(
  ({ className, children, id, orientation = 'horizontal' }: TBoxProps, ref) => {
    const orientationClassName =
      orientation === 'horizontal' ? 'flex-row' : 'flex-col';

    return (
      <div
        className={cn('flex', orientationClassName, className)}
        id={id}
        ref={ref as React.LegacyRef<HTMLDivElement>}
      >
        {children}
      </div>
    );
  },
);

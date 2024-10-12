import { type VariantProps, cn, cva } from '@react-xp/theme/tailwind';
import React from 'react';

const boxVariants = cva('flex', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

type TBoxProps = VariantProps<typeof boxVariants> & {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  orientation?: 'horizontal' | 'vertical';
  ref?: React.RefObject<HTMLDivElement | null>;
};

export const Box = React.forwardRef(
  ({ className, children, id, orientation = 'horizontal' }: TBoxProps, ref) => {
    return (
      <div
        className={cn(boxVariants({ orientation }), className)}
        id={id}
        ref={ref as React.LegacyRef<HTMLDivElement>}
      >
        {children}
      </div>
    );
  },
);

Box.displayName = 'Box';

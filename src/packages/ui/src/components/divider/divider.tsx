import { type VariantProps, cn, cva } from '@react-xp/core/tailwind';
import type React from 'react';
import type { TComponentBaseProps } from '../../types/components';

const dividerVariants = cva('divider', {
  variants: {
    variant: {
      default: '',
      neutral: 'divider-neutral',
      primary: 'divider-primary',
      secondary: 'divider-secondary',
      accent: 'divider-accent',
      info: 'divider-info',
      success: 'divider-success',
      warning: 'divider-warning',
      error: 'divider-error',
    },
    align: {
      default: '',
      start: 'divider-start',
      end: 'divider-end',
    },
    orientation: {
      horizontal: 'divider-horizontal',
      vertical: 'divider-vertical',
    },
  },
  defaultVariants: {
    variant: 'default',
    align: 'default',
    orientation: 'horizontal',
  },
});

interface DividerProps
  extends VariantProps<typeof dividerVariants>,
    TComponentBaseProps {
  children?: React.ReactNode;
}

export const Divider = ({
  children,
  align,
  className,
  orientation,
  variant,
}: DividerProps) => {
  return (
    <div
      className={cn(
        dividerVariants({ variant, align, orientation, className }),
      )}
    >
      {children}
    </div>
  );
};

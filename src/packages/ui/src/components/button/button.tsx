import { type VariantProps, cn, cva } from '@react-xp/core/tailwind';
import * as React from 'react';
import type { TComponentBaseProps } from '../../types/components';

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      default: 'btn btn-primary',
      neutral: 'btn btn-neutral',
      primary: 'btn btn-primary',
      secondary: 'btn btn-secondary',
      accent: 'btn btn-accent',
      info: 'btn btn-info',
      success: 'btn btn-success',
      warning: 'btn btn-warning',
      error: 'btn btn-error',
      ghost: 'btn btn-ghost',
      link: 'btn btn-link',
      outline: 'btn btn-outline',
    },
    size: {
      default: 'btn-md',
      xs: 'btn-xs',
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
      wide: 'btn-wide',
      block: 'btn-block',
    },
    shape: {
      circle: 'btn-circle',
      square: 'btn-square',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    TComponentBaseProps {
  onClick?: (e: React.MouseEvent) => void;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, onClick, size, variant }, ref) => {
    return (
      <button
        type="button"
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={onClick}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';

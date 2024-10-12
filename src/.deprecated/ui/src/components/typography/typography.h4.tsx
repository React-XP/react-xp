import type { TComponentBaseProps } from '../../types/components';

type TTypographyH4Props = TComponentBaseProps;

export function TypographyH4({ children }: TTypographyH4Props) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

TypographyH4.displayName = 'TypographyH4';

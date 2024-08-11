import type { TComponentBaseProps } from '../../types/components';

type TTypographyH3Props = TComponentBaseProps;

export function TypographyH3({ children }: TTypographyH3Props) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

TypographyH3.displayName = 'TypographyH3';

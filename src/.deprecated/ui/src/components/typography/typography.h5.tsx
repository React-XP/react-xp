import type { TComponentBaseProps } from '../../types/components';

type TTypographyH5Props = TComponentBaseProps;

export function TypographyH5({ children }: TTypographyH5Props) {
  return (
    <h5 className="scroll-m-20 text-lg font-semibold tracking-tight">
      {children}
    </h5>
  );
}

TypographyH5.displayName = 'TypographyH5';

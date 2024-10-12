import type { TComponentBaseProps } from '../../types/components';

type TTypographyH2Props = TComponentBaseProps;

export function TypographyH2({ children }: TTypographyH2Props) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

TypographyH2.displayName = 'TypographyH2';

import type { TComponentBaseProps } from '../../types/components';

type TTypographyH6Props = TComponentBaseProps;

export function TypographyH6({ children }: TTypographyH6Props) {
  return <h6 className="scroll-m-20 text-lg tracking-tight">{children}</h6>;
}

TypographyH6.displayName = 'TypographyH6';

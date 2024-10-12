import type { TComponentBaseProps } from '../../types/components';

type TTypographyH1Props = TComponentBaseProps;

export function TypographyH1({ children }: TTypographyH1Props) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}

TypographyH1.displayName = 'TypographyH1';

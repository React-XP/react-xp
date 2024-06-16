import { TypographyH1 } from './typography.h1';
import { TypographyH2 } from './typography.h2';
import { TypographyH3 } from './typography.h3';
import { TypographyH4 } from './typography.h4';

interface TypographyProps {
  children: React.ReactNode;
}

export function Typography({ children }: TypographyProps) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

Typography.displayName = 'Typography';
Typography.H1 = TypographyH1;
Typography.H2 = TypographyH2;
Typography.H3 = TypographyH3;
Typography.H4 = TypographyH4;
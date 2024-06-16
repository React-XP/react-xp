interface TypographyH1Props {
  children: React.ReactNode;
}

export function TypographyH3({ children }: TypographyH1Props) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

TypographyH3.displayName = 'TypographyH3';

interface TypographyH1Props {
  children: React.ReactNode;
}

export function TypographyH4({ children }: TypographyH1Props) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

TypographyH4.displayName = 'TypographyH4';

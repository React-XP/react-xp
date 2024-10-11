type TBoxProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Box = ({ className, children }: TBoxProps) => {
  return <div className={className}>{children}</div>;
};

Box.displayName = 'Box';

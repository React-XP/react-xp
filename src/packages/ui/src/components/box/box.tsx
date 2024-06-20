import { cn } from '@react-xp/core/tailwind';

type TBoxProps = {
  className?: string;
  children?: React.ReactNode;
  dir?: 'horizontal' | 'vertical';
};

export const Box = ({ className, children, dir = 'vertical' }: TBoxProps) => {
  const directionClassName = dir === 'horizontal' ? 'flex-row' : 'flex-col';

  return (
    <div className={cn('flex', directionClassName, className)}>{children}</div>
  );
};

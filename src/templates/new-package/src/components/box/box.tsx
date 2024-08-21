import { cn } from '@react-xp/core/tailwind';

type TBoxProps = {
  className?: string;
  children?: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
};

export const Box = ({
  className,
  children,
  orientation = 'vertical',
}: TBoxProps) => {
  const orientationClassName =
    orientation === 'horizontal' ? 'flex-row' : 'flex-col';

  return (
    <div className={cn('flex', orientationClassName, className)}>
      {children}
    </div>
  );
};

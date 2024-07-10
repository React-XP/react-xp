import { cn } from '@react-xp/core/tailwind';
import type { TComponentBaseProps } from '../../types/components';

type TDrawerProps = TComponentBaseProps;

export const Drawer = ({ children, className }: TDrawerProps) => {
  return (
    <div className={cn('drawer', className)}>
      <div className="drawer-side">{children}</div>
    </div>
  );
};

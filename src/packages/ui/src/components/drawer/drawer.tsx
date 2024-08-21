import { cn } from '@react-xp/core/tailwind';
import { useIsVisible } from '@react-xp/core/visibility';
import type { TComponentBaseProps } from '../../types/components';

type TDrawerProps = TComponentBaseProps & {
  name: `drawers.${string}`;
};

export const Drawer = ({ children, className, name }: TDrawerProps) => {
  const isVisible = useIsVisible(name);

  return (
    <div
      className={cn(
        'drawer drawer-end',
        className,
        isVisible ? 'drawer-open' : undefined,
      )}
    >
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      />
      <div className="drawer-side">{children}</div>
    </div>
  );
};

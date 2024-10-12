import { cn } from '@react-xp/theme/tailwind';

export const Divider = () => {
  return (
    <hr
      className={cn('my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10')}
    />
  );
};

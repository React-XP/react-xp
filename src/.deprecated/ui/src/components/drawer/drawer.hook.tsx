import { useVisibility } from '@react-xp/core/visibility';

export const useDrawer = (name: `drawers.${string}`) => {
  const { hide, show } = useVisibility(name);

  const close = () => {
    hide();
  };

  const open = () => {
    show();
  };

  return {
    close,
    open,
  };
};

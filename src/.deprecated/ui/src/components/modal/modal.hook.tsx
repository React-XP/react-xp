import { useVisibility } from '@react-xp/core/visibility';

export const useModal = (name: `modals.${string}`) => {
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

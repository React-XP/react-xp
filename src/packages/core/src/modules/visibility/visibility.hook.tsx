import { useVisibilityStore } from './visibility.store';

export const useVisibility = (key: string) => {
  const hide = useVisibilityStore((state) => state.hide);
  const show = useVisibilityStore((state) => state.show);

  return {
    hide: () => {
      hide(key);
    },
    show: () => {
      show(key);
    },
  };
};

export const useIsVisible = (key: string) => {
  const visibilities = useVisibilityStore((state) => state.visibilities);

  return visibilities[key] > 0;
};

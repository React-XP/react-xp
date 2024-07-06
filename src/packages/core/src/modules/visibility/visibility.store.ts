type TVisibility = {
  visibility: number;
};

const store = new Map<string, TVisibility>();

export const VisibilityStore = (() => {
  return {
    isVisible: (key: string) => {
      return (store.get(key)?.visibility || 0) > 0;
    },
    hide: (key: string) => {
      let visibility = store.get(key)?.visibility || 0;
      visibility = visibility > 0 ? visibility - 1 : 0;

      store.set(key, { visibility });
    },
    show: (key: string) => {
      let visibility = store.get(key)?.visibility || 0;
      visibility = visibility + 1;

      store.set(key, { visibility });
    },
  };
})();

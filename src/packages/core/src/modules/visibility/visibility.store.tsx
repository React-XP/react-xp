import { create } from 'zustand';

interface VisibilityState {
  visibilities: Record<string, number>;
  hide: (key: string) => void;
  show: (key: string) => void;
}

export const useVisibilityStore = create<VisibilityState>((set) => ({
  visibilities: {},
  hide: (key) => {
    set((state) => ({
      visibilities: {
        ...state.visibilities,
        [key]:
          state.visibilities[key] - 1 > 0 ? state.visibilities[key] - 1 : 0,
      },
    }));
  },
  show: (key) => {
    set((state) => ({
      visibilities: {
        ...state.visibilities,
        [key]: (state.visibilities[key] || 0) + 1,
      },
    }));
  },
}));

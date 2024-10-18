import React from 'react';
import type { TEventsCallback, TEventsCommonInput } from './events.types';

type TEventsState<T> = Record<string, Set<TEventsCallback<T>>>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const memoryState: TEventsState<any> = {};

export const useEventsStore = <T>() => {
  const state = React.useRef<TEventsState<T>>(memoryState);
  const [_, setTick] = React.useState(0);

  return {
    add: ({
      key,
      callback,
    }: TEventsCommonInput & { callback: TEventsCallback<T> }) => {
      state.current[key] = state.current[key] || new Set();
      state.current[key].add(callback);

      return () => {
        state.current[key].delete(callback);
      };
    },
    clear: ({ key }: TEventsCommonInput) => {
      state.current[key].clear();
    },
    state,
    update: () => setTick((tick) => tick + 1),
  };
};

import React from 'react';
import type { TEventsCommonInput } from './events.types';
import { useEvents } from './useEvents.hook';
import { useEventsStore } from './useEventsStore.hook';

export function useEventEmitter<T>({ key }: TEventsCommonInput) {
  const { state, update } = useEventsStore();
  const { onEvent } = useEvents();

  const emit = (payload: T) => {
    onEvent?.({ key, payload });

    for (const callback of state.current[key]) {
      callback({ payload });
    }

    update();
  };

  return {
    emit,
  };
}

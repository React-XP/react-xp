import React from 'react';
import type { TEventsCommonInput, TEventsPayload } from './events.types';
import { useEventsStore } from './useEventsStore.hook';

type TEventSubscriberInput<T> = TEventsCommonInput &
  Partial<{
    callback: ({ payload }: TEventsPayload<T>) => void;
  }>;

export function useEventSubscriber<T>({
  callback,
  key,
}: TEventSubscriberInput<T>) {
  const { add } = useEventsStore<T>();
  const [_, setTick] = React.useState(0);

  const subscribe = ({ callback, key }: Required<TEventSubscriberInput<T>>) => {
    const internalCallback = (data: TEventsPayload<T>) => {
      callback(data);

      setTick((tick) => tick + 1);
    };

    return add({ callback: internalCallback, key });
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    if (!callback) return;

    const unsubscribe = subscribe({ callback, key });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    subscribe,
  };
}

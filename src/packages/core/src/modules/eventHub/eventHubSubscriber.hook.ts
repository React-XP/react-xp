import React from 'react';
import { EventHub } from './eventHub.helper';
import type {
  EventHubPayload,
  EventHubSubscribeCallbackData,
  EventHubSubscribeMethodInput,
} from './eventHub.types';

type UseEventHubSubscriberInputOptions = {
  enable?: boolean;
  refresh?: boolean;
};

type UseEventHubSubscriberInput<TPayload extends EventHubPayload> =
  EventHubSubscribeMethodInput<TPayload> & {
    options?: UseEventHubSubscriberInputOptions;
  };

type UseEventHubSubscriberOutput<TPayload extends EventHubPayload> = {
  payload: EventHubSubscribeCallbackData<TPayload>;
  unsubscribe: () => void;
};

export const useEventHubSubscriber = <TPayload extends EventHubPayload>({
  callback,
  key,
  options,
}: UseEventHubSubscriberInput<TPayload>): UseEventHubSubscriberOutput<TPayload> => {
  const { enable = true, refresh = true } = options || {};
  const initialized = React.useRef(false);
  const unsubscribe = React.useRef<() => void>(() => {});
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [payload, setPayload] = React.useState<any>(undefined);

  const innerCallback =
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (payload: any): void => {
      if (refresh) {
        setPayload(payload);
      }

      callback(payload);
    };

  if (!initialized.current) {
    initialized.current = true;

    if (enable) {
      unsubscribe.current = EventHub.subscribe({
        key,
        callback: innerCallback,
      });
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    if (enable) {
      unsubscribe.current = EventHub.subscribe({
        key,
        callback: innerCallback,
      });
    } else {
      unsubscribe.current();
    }
  }, [enable]);

  React.useEffect(() => {
    return unsubscribe.current;
  }, []);

  return {
    payload,
    unsubscribe: unsubscribe.current,
  };
};

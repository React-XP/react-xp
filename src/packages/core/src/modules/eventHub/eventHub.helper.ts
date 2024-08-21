import type {
  EventHubEmitMethodInput,
  EventHubPayload,
  EventHubSubscribeCallback,
  EventHubSubscribeMethodInput,
} from './eventHub.types';

class EventHubInternal {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  subscriptions: Record<string, EventHubSubscribeCallback<any>[]> = {};

  subscribe = <TPayload extends EventHubPayload>({
    key,
    callback,
  }: EventHubSubscribeMethodInput<TPayload>): (() => void) => {
    if (this.subscriptions[key] === undefined) {
      this.subscriptions[key] = [];
    }
    const index = this.subscriptions[key].length;

    this.subscriptions[key].push(callback);

    return (): void => {
      if (this.subscriptions[key]) {
        this.subscriptions[key].splice(index, index + 1);
      }
    };
  };

  emit = <TPayload extends EventHubPayload>({
    key,
    payload,
  }: EventHubEmitMethodInput<TPayload>): void => {
    for (const subscription of this.subscriptions[key] || []) {
      subscription({ payload, date: new Date() });
    }
  };
}

export const EventHub = new EventHubInternal();

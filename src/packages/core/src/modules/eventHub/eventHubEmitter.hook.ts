import { EventHub } from './eventHub.helper';
import type {
  EventHubEmitMethodInput,
  EventHubPayload,
} from './eventHub.types';

type UseEventHubEmitterInput<TPayload extends EventHubPayload> = Omit<
  EventHubEmitMethodInput<TPayload>,
  'payload'
>;

type UseEventHubEmitterOutput<TPayload extends EventHubPayload> = {
  emit: (input: Omit<EventHubEmitMethodInput<TPayload>, 'key'>) => void;
};

export const useEventHubEmitter = <TPayload extends EventHubPayload>({
  key,
}: UseEventHubEmitterInput<TPayload>): UseEventHubEmitterOutput<TPayload> => {
  return {
    emit: ({ payload }: Omit<EventHubEmitMethodInput<TPayload>, 'key'>): void =>
      EventHub.emit({ key, payload }),
  };
};

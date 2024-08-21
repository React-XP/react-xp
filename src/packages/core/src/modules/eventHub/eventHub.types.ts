export type EventHubPayload = Record<string, unknown>;
export type EventHubSubscribeCallbackData<TPayload extends EventHubPayload> = {
  payload: TPayload;
  date: Date;
};
export type EventHubSubscribeCallback<TPayload extends EventHubPayload> = (
  data: EventHubSubscribeCallbackData<TPayload>,
) => void;

export interface EventHubSubscribeMethodInput<
  TPayload extends EventHubPayload,
> {
  key: string;
  callback: EventHubSubscribeCallback<TPayload>;
}

export interface EventHubEmitMethodInput<TPayload extends EventHubPayload> {
  key: string;
  payload: TPayload;
}

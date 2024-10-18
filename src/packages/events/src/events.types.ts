export type TEventsCommonInput = { key: string };
export type TEventsPayload<T> = { payload: T };
export type TEventsCallback<T> = (event: TEventsPayload<T>) => void;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type TEventsEvent<T extends TEventsPayload<any>> = (
  event: TEventsCommonInput & T,
) => void;

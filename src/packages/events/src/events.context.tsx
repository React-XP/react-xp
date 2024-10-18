import React from 'react';
import type {
  TEventsCommonInput,
  TEventsEvent,
  TEventsPayload,
} from './events.types';

type TEventsContext = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  onEvent?: TEventsEvent<TEventsPayload<any>>;
};

export const eventsContext = React.createContext<TEventsContext>({});

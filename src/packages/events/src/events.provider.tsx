import { eventsContext } from './events.context';
import type {
  TEventsCommonInput,
  TEventsEvent,
  TEventsPayload,
} from './events.types';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type TEventsProviderProps<T extends TEventsPayload<any>> = {
  onEvent?: TEventsEvent<TEventsPayload<T>>;
  children?: React.ReactNode;
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const EventsProvider = <T extends TEventsPayload<any>>({
  children,
  onEvent,
}: TEventsProviderProps<T>) => {
  return (
    <eventsContext.Provider value={{ onEvent }}>
      {children}
    </eventsContext.Provider>
  );
};

import React from 'react';
import { eventsContext } from './events.context';

export const useEvents = () => {
  return React.useContext(eventsContext);
};

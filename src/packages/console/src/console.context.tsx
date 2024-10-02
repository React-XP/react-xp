import React from 'react';
import type { TConsoleContext } from './console.types';

export const ConsoleContext = React.createContext<TConsoleContext>({
  debug: false,
  log: false,
  warn: false,
});

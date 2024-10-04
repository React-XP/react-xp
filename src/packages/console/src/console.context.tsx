import React from 'react';
import type { TConsoleContext } from './console.types';

export const ConsoleContext = React.createContext<TConsoleContext>({
  debug: false,
  error: false,
  log: false,
  warn: false,
});

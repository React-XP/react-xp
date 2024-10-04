import { ConsoleContext } from './console.context';
import type { TConsoleContext } from './console.types';

type TConsoleProviderProps = TConsoleContext & {
  children: React.ReactNode;
};

export const ConsoleProvider = ({
  children,
  debug,
  error,
  log,
  warn,
  onDebug,
  onError,
  onLog,
  onWarn,
}: TConsoleProviderProps) => {
  return (
    <ConsoleContext.Provider
      value={{ debug, error, log, warn, onDebug, onError, onLog, onWarn }}
    >
      {children}
    </ConsoleContext.Provider>
  );
};

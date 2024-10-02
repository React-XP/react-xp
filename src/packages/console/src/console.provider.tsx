import { ConsoleContext } from './console.context';
import type { TConsoleContext } from './console.types';

type TConsoleProviderProps = TConsoleContext & {
  children: React.ReactNode;
};

export const ConsoleProvider = ({
  children,
  debug,
  log,
  warn,
  onDebug,
  onLog,
  onWarn,
}: TConsoleProviderProps) => {
  return (
    <ConsoleContext.Provider
      value={{ debug, log, warn, onDebug, onLog, onWarn }}
    >
      {children}
    </ConsoleContext.Provider>
  );
};

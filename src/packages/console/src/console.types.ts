export type TConsoleMethods = 'debug' | 'log' | 'warn';

export type TConsoleMethodValue =
  | boolean
  | ({ '*': boolean } & Record<string, boolean>);

export type TConsoleData = {
  active: boolean;
  message: string;
  module: string;
  group?: string;
  timestamp: number;
};

export type TConsoleContext = Record<TConsoleMethods, TConsoleMethodValue> & {
  onDebug?: (data: TConsoleData) => void;
  onLog?: (data: TConsoleData) => void;
  onWarn?: (data: TConsoleData) => void;
};

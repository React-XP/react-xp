export type TConsoleMethods = 'debug' | 'log' | 'warn';

export type TConsoleMethodValue =
  | boolean
  | ({ '*': boolean } & Record<string, boolean>);

export type TConsoleContext = Record<TConsoleMethods, TConsoleMethodValue>;

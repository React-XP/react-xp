import React from 'react';
import { ConsoleContext } from './console.context';
import type { TConsoleMethodValue } from './console.types';

const checkIsActive = (typeValue: TConsoleMethodValue, module: string) => {
  if (typeof typeValue === 'boolean') {
    return typeValue;
  }

  if (typeof typeValue === 'object' && typeValue[module] !== undefined) {
    return typeValue[module];
  }

  return typeValue['*'];
};

const getMessage = (module?: string, ...message: Array<unknown>) => {
  const now = new Date();
  const moduleForMessage = module ? `${module} :: ` : '';

  const prefixMessage = `${now.toISOString()} :: ${moduleForMessage}`;
  let totalMessage = '';

  for (const msg of message) {
    totalMessage = `${totalMessage} ${msg} `;
  }

  totalMessage = totalMessage.trim();

  return { now, prefixMessage, totalMessage };
};

const logger = (fn: (msg: string, ...args: unknown[]) => void) => {
  return (active: boolean, module?: string, msg?: string, rest?: unknown[]) => {
    const treatMessage = getMessage(module, msg, rest);

    if (active) {
      if (rest?.length) {
        fn(treatMessage.prefixMessage, msg, ...rest);
      } else {
        fn(treatMessage.prefixMessage, msg);
      }
    }

    return treatMessage;
  };
};

export const useConsole = (module: string) => {
  const { debug, error, log, warn, onDebug, onLog, onWarn } =
    React.useContext(ConsoleContext);

  const handleDebug = React.useCallback(
    (msg: string, ...rest: unknown[]) => {
      const active = checkIsActive(debug, module);

      const { now, totalMessage } = logger(console.debug)(
        active,
        module,
        msg,
        rest,
      );

      onDebug?.({
        active,
        message: totalMessage,
        module,
        timestamp: now.getTime(),
      });
    },
    [debug, module, onDebug],
  );

  const handleError = React.useCallback(
    (msg: string, ...rest: unknown[]) => {
      const active = checkIsActive(error, module);

      const { now, totalMessage } = logger(console.error)(
        active,
        module,
        msg,
        rest,
      );

      onDebug?.({
        active,
        message: totalMessage,
        module,
        timestamp: now.getTime(),
      });
    },
    [error, module, onDebug],
  );

  const handleLog = React.useCallback(
    (msg: string, ...rest: unknown[]) => {
      const active = checkIsActive(log, module);

      const { now, totalMessage } = logger(console.log)(
        active,
        module,
        msg,
        rest,
      );

      onLog?.({
        active,
        message: totalMessage,
        module,
        timestamp: now.getTime(),
      });
    },
    [log, module, onLog],
  );

  const handleWarn = React.useCallback(
    (msg: string, ...rest: unknown[]) => {
      const active = checkIsActive(warn, module);

      const { now, totalMessage } = logger(console.warn)(
        active,
        module,
        msg,
        rest,
      );

      onWarn?.({
        active,
        message: totalMessage,
        module,
        timestamp: now.getTime(),
      });
    },
    [module, warn, onWarn],
  );

  return {
    debug: handleDebug,
    error: handleError,
    log: handleLog,
    warn: handleWarn,
  };
};

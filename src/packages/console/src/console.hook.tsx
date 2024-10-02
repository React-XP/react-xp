import React from 'react';
import { ConsoleContext } from './console.context';
import type { TConsoleMethodValue } from './console.types';

const checkIsActive = (typeValue: TConsoleMethodValue, group = '*') => {
  const defaultValue =
    typeof typeValue === 'boolean' ? typeValue : typeValue['*'];
  const specificValue =
    typeof typeValue === 'boolean' ? typeValue : typeValue[group];

  return specificValue || defaultValue;
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

const logger = (fn: (...args: unknown[]) => void) => {
  return (active: boolean, module?: string, ...message: Array<unknown>) => {
    const treatMessage = getMessage(module, ...message);

    active && fn.apply(null, [treatMessage.prefixMessage, ...message]);

    return treatMessage;
  };
};

export const useConsole = ({
  group,
  module,
}: {
  group?: string;
  module: string;
}) => {
  const { debug, log, warn, onDebug, onLog, onWarn } =
    React.useContext(ConsoleContext);

  const handleDebug = React.useCallback(
    (...message: Array<unknown>) => {
      const active = checkIsActive(debug, group);

      const { now, totalMessage } = logger(console.debug)(
        active,
        module,
        message,
      );

      onDebug?.({
        active,
        message: totalMessage,
        module,
        group,
        timestamp: now.getTime(),
      });
    },
    [debug, group, module, onDebug],
  );

  const handleLog = React.useCallback(
    (...message: Array<unknown>) => {
      const active = checkIsActive(log, group);

      const { now, totalMessage } = logger(console.log)(
        active,
        module,
        message,
      );

      onLog?.({
        active,
        message: totalMessage,
        module,
        group,
        timestamp: now.getTime(),
      });
    },
    [group, log, module, onLog],
  );

  const handleWarn = React.useCallback(
    (...message: Array<unknown>) => {
      const active = checkIsActive(warn, group);

      const { now, totalMessage } = logger(console.warn)(
        active,
        module,
        message,
      );

      onWarn?.({
        active,
        message: totalMessage,
        module,
        group,
        timestamp: now.getTime(),
      });
    },
    [group, module, warn, onWarn],
  );

  return {
    debug: handleDebug,
    log: handleLog,
    warn: handleWarn,
  };
};

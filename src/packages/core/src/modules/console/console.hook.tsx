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

const logger = (fn: (...args: unknown[]) => void) => {
  const now = new Date();

  return (module?: string, ...message: Array<unknown>) => {
    const moduleForMessage = module ? `${module} :: ` : '';

    fn.apply(null, [`${now.toISOString()} :: ${moduleForMessage}`, ...message]);
  };
};

export const useConsole = ({
  group,
  module,
}: {
  group?: string;
  module: string;
}) => {
  const { debug, log, warn } = React.useContext(ConsoleContext);

  const handleDebug = React.useCallback(
    (...message: Array<unknown>) => {
      if (checkIsActive(debug, group)) {
        logger(console.debug)(module, message);
      }
    },
    [debug, group, module],
  );

  const handleLog = React.useCallback(
    (...message: Array<unknown>) => {
      if (checkIsActive(log, group)) {
        logger(console.log)(module, message);
      }
    },
    [group, log, module],
  );

  const handleWarn = React.useCallback(
    (...message: Array<unknown>) => {
      if (checkIsActive(warn, group)) {
        logger(console.warn)(module, message);
      }
    },
    [group, module, warn],
  );

  return {
    debug: handleDebug,
    log: handleLog,
    warn: handleWarn,
  };
};

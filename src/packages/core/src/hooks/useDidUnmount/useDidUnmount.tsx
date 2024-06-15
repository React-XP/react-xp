import React from 'react';

export const useDidUnmount = (cb: () => void) => {
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => cb, []);
};

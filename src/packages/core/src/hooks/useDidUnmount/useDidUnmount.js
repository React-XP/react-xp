import React from 'react';
export const useDidUnmount = (cb) => {
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => cb, []);
};

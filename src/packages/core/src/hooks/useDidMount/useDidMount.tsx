import React from 'react';

export const useDidMount = (cb: () => void) => {
  React.useEffect(cb, []);
};

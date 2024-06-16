import React from 'react';
export const useDidMount = (cb) => {
  React.useEffect(cb, []);
};

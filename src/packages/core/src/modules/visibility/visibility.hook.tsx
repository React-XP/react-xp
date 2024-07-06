import React from 'react';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import { useEventHubSubscriber } from '../eventHub';
import { VisibilityStore } from './visibility.store';

export const useVisibility = (key: string) => {
  const forceUpdate = useForceUpdate();
  const [subscribed, setSubscribed] = React.useState(false);
  useEventHubSubscriber({
    key,
    callback: () => {
      forceUpdate();
    },
    options: { enable: subscribed },
  });

  return {
    isVisible: () => {
      setSubscribed(true);

      return VisibilityStore.isVisible(key);
    },
    hide: () => VisibilityStore.hide(key),
    show: () => VisibilityStore.show(key),
  };
};

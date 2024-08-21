import React from 'react';

type TUseIsVisibleInViewportProps = {
  id?: string;
  ref?: React.RefObject<HTMLElement>;
};

type TUseIsVisibleInViewportState = {
  area: number;
  intersectionRect: DOMRectReadOnly;
  status: 'fullVisible' | 'hidden' | 'partialVisible';
};

export const useIsVisibleInViewport = ({
  id,
  ref,
}: TUseIsVisibleInViewportProps) => {
  const [state, setState] = React.useState<TUseIsVisibleInViewportState>();

  React.useEffect(() => {
    const elementRef = ref?.current;
    const elementId = id ? document.getElementById(id) : undefined;
    const element = elementRef || elementId;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setState({
        area:
          entry.intersectionRatio *
          entry.boundingClientRect.width *
          entry.boundingClientRect.height,
        intersectionRect: entry.intersectionRect,
        status: entry.isIntersecting ? 'fullVisible' : 'hidden',
      });
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [id, ref]);

  return state;
};

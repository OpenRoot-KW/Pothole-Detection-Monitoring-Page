// @ts-check
import { useCallbackRef } from './useCallbackRef';

/**
 * @param load {() => unknown}
 * @param loading {boolean | undefined}
 */
export const useInfiniteScroll = (load, loading) => {
  return useCallbackRef(
    (scrollEndMarker) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !loading) {
            load();
          }
        },
        { threshold: 0 }
      );

      observer.observe(scrollEndMarker);

      return () => {
        observer.unobserve(scrollEndMarker);
      };
    },
    [load, loading]
  );
};

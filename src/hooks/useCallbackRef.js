// @ts-check
import { useCallback, useRef } from 'react';

/**
 * @template T
 * @param callback {(element: T) => () => void}
 * @param dependencies {unknown[]}
 */
export const useCallbackRef = (callback, dependencies) => {
  const cleanupRef = useRef();

  return useCallback((element) => {
    cleanupRef.current?.();
    cleanupRef.current = undefined;

    if (!element) {
      return;
    }

    cleanupRef.current = callback(element);
  }, dependencies ?? []);
};

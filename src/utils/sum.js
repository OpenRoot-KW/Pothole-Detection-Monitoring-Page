// @ts-check

import { identity } from './identity';

/**
 * Sums an array of numbers
 * @template T
 * @param {T[]} arr
 * @param {(item: T) => number} byFn
 * @returns {number}
 */
export function sumBy(arr, byFn = identity) {
  return arr.reduce((acc, cur) => acc + byFn(cur), 0);
}

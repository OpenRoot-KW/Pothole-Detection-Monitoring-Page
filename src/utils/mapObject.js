// @ts-check

/**
 * Maps an object's values
 * @template BeforeType, AfterType
 * @param {Record<string, BeforeType>} obj
 * @param {(value: BeforeType) => AfterType} fn
 * @returns {Record<string, AfterType>}
 */
export function mapObject(obj, fn) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, fn(value)])
  );
}

// @ts-check

/**
 * @type {Record<string, {en: string, label: string, order: number}>}
 */
export const MONTHS = {
  JANUARY: { order: 1, label: '1월', en: 'january' },
  FEBRUARY: { order: 2, label: '2월', en: 'february' },
  MARCH: { order: 3, label: '3월', en: 'march' },
  APRIL: { order: 4, label: '4월', en: 'april' },
  MAY: { order: 5, label: '5월', en: 'may' },
  JUNE: { order: 6, label: '6월', en: 'june' },
  JULY: { order: 7, label: '7월', en: 'july' },
  AUGUST: { order: 8, label: '8월', en: 'august' },
  SEPTEMBER: { order: 9, label: '9월', en: 'september' },
  OCTOBER: { order: 10, label: '10월', en: 'october' },
  NOVEMBER: { order: 11, label: '11월', en: 'november' },
  DECEMBER: { order: 12, label: '12월', en: 'december' },
};

const sortedMonths = Object.values(MONTHS).sort((x, y) => x.order - y.order);

/**
 * @return {string[]}
 */
export function getMonthLabels() {
  return sortedMonths.map((month) => month.label);
}

/**
 * @return {string[]}
 */
export function getMonthEnValues() {
  return sortedMonths.map((month) => month.en);
}

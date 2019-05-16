/**
 * Access Date by specified method.
 *
 * @function
 * @param {Date} date A manipulated date
 * @param {String} unit The method of Date instance
 * @param {Number} value Value to be set
 * @returns {Date}
 * @example
 *
 * const date = new Date('2020/2/2');
 *
 * // -> 2020
 * accessor(date, 'FullYear');
 *
 * // -> Sun Feb 02 2022 00:00:00 GMT+0800
 * accessor(date, 'FullYear', 2022);
 */

interface Date {
  [key: string]: any;
}

const accessor = (
  date: Date,
  unit: string,
  value?: number[]
): number | Date => {
  if (
    {}.toString.call(date).slice(8, -1) === 'Date' &&
    typeof unit === 'string'
  ) {
    if (!value) {
      return date['get' + unit]() + (unit === 'Month' ? 1 : 0);
    }
    date['set' + unit].call(date, value);
  }
  return date;
};

export default accessor;

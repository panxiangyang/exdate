import accessor from './accessor';

/**
 * Gets or sets the value of the day.
 *
 * @function
 * @param {Date} date Date of day to be acquired
 * @param {Number} value The value of day to be set
 * @returns {Date|Number} Return day or date object
 * @example
 *
 * const date = new Date('2020/2/2');
 * // -> 2
 * days(date);
 *
 * // -> Mon Feb 03 2020 00:00:00 GMT+0800
 * days(date, 3);
 */
const days = (date: Date, value?: number): Date | number => {
  return accessor.call(null, date, 'Date', value);
};
export default days;

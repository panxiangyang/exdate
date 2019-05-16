import accessor from './accessor';

/**
 * Gets or sets the value of the month.
 *
 * @function
 * @param {Date} date Date of month to be acquired
 * @param {Number} value The value of month to be set
 * @returns {Date|Number} Return month or date object
 * @example
 *
 * const date = new Date('2020/2/2');
 * // -> 2
 * months(date);
 *
 * // -> Mon Mar 02 2020 00:00:00 GMT+0800
 * months(date, 3);
 */
const months = (date: Date, value?: number): number | Date => {
  return accessor.call(null, date, 'Month', value ? value - 1 : value);
};
export default months;

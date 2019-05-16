import accessor from './accessor';

/**
 * Gets or sets the value of the hour.
 *
 * @function
 * @param {Date} date Date of hour to be acquired
 * @param {Number} value The value of hour to be set
 * @returns {Date|Number} Return hour or date object
 * @example
 *
 * const date = new Date('2020/2/2 10:10:10');
 * // -> 10
 * hours(date);
 *
 * // -> Mon Feb 03 2020 12:10:10 GMT+0800
 * hours(date, 12);
 */
const hours = (date: Date, value?: number): number | Date => {
  return accessor.call(null, date, 'Hours', value);
};
export default hours;

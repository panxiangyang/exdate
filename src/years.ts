import accessor from './accessor';

/**
 * Gets or sets the value of the year.
 *
 * @function
 * @param {Date} date Date of year to be acquired
 * @param {Number} value The value of year to be set
 * @returns {Date|Number} Return year or date object
 * @example
 *
 * const date = new Date('2020/2/2');
 * // -> 2020
 * years(date);
 *
 * // -> Sun Feb 02 2022 00:00:00 GMT+0800
 * years(date, 2022);
 */
const years = (date: Date, value?: number): number | Date => {
  return accessor.call(null, date, 'FullYear', value);
};
export default years;

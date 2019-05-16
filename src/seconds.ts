import accessor from './accessor';

/**
 * Gets or sets the value of the seconds.
 *
 * @function
 * @param {Date} date Date of hour to be acquired
 * @param {Number} value An integer between 0 and 59, representing the seconds.
 * @returns {Date|Number} Return seconds or date object
 * @example
 *
 * const date = new Date('2020/2/2 10:10:10');
 * // -> 10
 * seconds(date);
 *
 * // -> Mon Feb 03 2020 10:10:12 GMT+0800
 * seconds(date, 12);
 */
const seconds = (date: Date, value?: number): number | Date => {
  return accessor.call(null, date, 'Seconds', value);
};
export default seconds;

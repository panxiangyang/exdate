import accessor from './accessor';

/**
 * Gets or sets the value of the minutes.
 *
 * @function
 * @param {Date} date Date of hour to be acquired
 * @param {Number} value An integer between 0 and 59, representing the minutes.
 * @returns {Date|Number} Return minutes or date object
 * @example
 *
 * const date = new Date('2020/2/2 10:10:10');
 * // -> 10
 * minutes(date);
 *
 * // -> Mon Feb 03 2020 10:12:10 GMT+0800
 * minutes(date, 12);
 *
 * // -> Mon Feb 03 2020 10:12:12 GMT+0800
 * minutes(date, 12, 12);
 */
const minutes = (date: Date, value?: number): number | Date => {
  return accessor.call(null, date, 'Minutes', value);
};
export default minutes;

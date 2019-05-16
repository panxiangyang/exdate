import accessor from './accessor';

/**
 * Gets or sets the value of the milliseconds.
 *
 * @function
 * @param {Date} date Date of hour to be acquired
 * @param {Number} value A number between 0 and 999, representing the milliseconds.
 * @returns {Date|Number} Return seconds or date object
 * @example
 *
 * const date = new Date('2020/2/2 10:10:10');
 * // -> 0
 * milliseconds(date);
 *
 * // -> Mon Feb 03 2020 10:10:10 GMT+0800
 * milliseconds(date, 12);
 */
const milliseconds = (date: Date, value?: number): number | Date => {
  return accessor.call(null, date, 'Milliseconds', value);
};
export default milliseconds;

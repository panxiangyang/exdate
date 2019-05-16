import accessor from './accessor';

/**
 * Gets or sets the value of the week.
 *
 * @see https://weeknumber.net/how-to/javascript
 * @see https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
 * @function
 * @param {Date} date Date of week to be acquired
 * @param {Number} value The value of week to be set
 * @returns {Date|Number} Return week or date object
 * @example
 *
 * // -> 1
 * weeks(new Date('2019/1/1'));
 *
 * // -> Tue Jan 08 2019 00:00:00 GMT+0800
 * weeks(new Date('2019/1/1'), 1);
 */
const weeks = (date: Date, value?: number): number | Date => {
  const method = 'Date';
  // Get the weeek
  if (value) {
    return accessor.call(
      null,
      date,
      method,
      accessor.call(null, date, method) + value * 7
    );
  }
  const dt = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  dt.setUTCDate(dt.getUTCDate() + 4 - (dt.getUTCDay() || 7));
  // Get first day of year
  const start = new Date(Date.UTC(dt.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  return Math.ceil(((dt.getTime() - start.getTime()) / 86400000 + 1) / 7);
};
export default weeks;

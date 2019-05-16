import isLeapYear from './isLeapYear';

/**
 * Returns the days of years.
 *
 * @function
 * @param {Number} year The value of year
 * @returns {Number}
 * @example
 *
 * // -> 365
 * daysInYear(2019);
 *
 * // -> 366
 * daysInYear(2000);
 */
const daysInYear = (year: number): number => {
  return isLeapYear(year) ? 366 : 365;
};
export default daysInYear;

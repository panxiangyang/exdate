import isLeapYear from './isLeapYear';

/**
 * Returns the number of days for a specified month.
 *
 * @function
 * @param {Number} year The year
 * @param {Number} month The month, from 1 to 12.
 * @returns {Number}
 * @example
 *
 * // -> 31
 * getDaysInMonth(2020, 0);
 */
const getDaysInMonth = (year: number, month: number): number => {
  return [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ][month - 1];
};
export default getDaysInMonth;

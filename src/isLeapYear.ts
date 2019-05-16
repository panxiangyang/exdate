/**
 * Determine wether the input is leap year.
 * 
 * @function
 * @param {Number} year The year
 * @returns {Boolean}
 * @example
 * 
 * // -> false
 * isLeapYear(2019);
 * 
 * // -> true
 * isLeapYear(2000);
 */
const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
export default isLeapYear;

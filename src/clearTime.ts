/**
 * Clear the time of specified date.
 *
 * @function
 * @param date A manipulated date
 * @returns {Date}
 * @example
 *
 * // -> 2020/1/1
 * clearTime(new Date('2020/1/1 10:10:10'));
 */
const clearTime = (date: Date): Date => {
  date.setHours(0, 0, 0, 0);
  return date;
};
export default clearTime;

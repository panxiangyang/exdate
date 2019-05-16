/**
 * Compare the specified date and subdate, if date is larger than subdate, return 1, date less than subdate, return -1, date equal subdate, return 0.
 *
 * @function
 * @param {Date|Number} date The date
 * @param {Date|Number} subdate The compared date
 * @returns {Number}
 * @example
 *
 * // -> 1
 * compare(new Date('2020/10/06'), new Date('2020/10/01'));
 *
 * // -> -1
 * compare(new Date('2020/10/06'), new Date('2020/10/08'));
 *
 * // -> 0
 * compare(new Date('2020/10/06'), new Date('2020/10/06'));
 */
const compare = (date: Date, subdate: Date): number => {
  if (date instanceof Date && subdate instanceof Date) {
    return date < subdate ? -1 : date > subdate ? 1 : 0;
  }
  throw new TypeError('The input is not a Date object.');
};
export default compare;

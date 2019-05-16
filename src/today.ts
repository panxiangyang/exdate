import clearTime from './clearTime';

/**
 * Return today's date.
 * 
 * @function
 * @returns {Date}
 * @example
 * 
 * today();
 */
const today = (): Date => {
  return clearTime(new Date());
};
export default today;

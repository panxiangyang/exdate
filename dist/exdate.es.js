/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *
 * @function
 * @param {Date} date 待操作的 Date 对象
 * @param {String} format 指定格式化的字符串
 * @returns {String}
 * @example
 *
 * const current = new Date('2020/10/06 10:10:10');
 * // -> 2020-10-06 10:10:10'
 * console.log(Fx.formatDate(current, 'yyyy-MM-dd HH:mm:ss'));
 * // -> 2020年10月06日 10时10分10秒
 * console.log(Fx.formatDate(current, 'yyyy年MM月dd日 hh时mm分ss秒'));
 */
var format = function(date, format) {
  if (format === void 0) {
    format = 'yyyy-MM-dd HH:mm:ss';
  }
  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      var temp = o[k] + '';
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? temp : ('00' + temp).substr(temp.length)
      );
    }
  }
  return format;
};

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
var isLeapYear = function(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

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
var compare = function(date, subdate) {
  if (date instanceof Date && subdate instanceof Date) {
    return date < subdate ? -1 : date > subdate ? 1 : 0;
  }
  throw new TypeError('The input is not a Date object.');
};

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
var clearTime = function(date) {
  date.setHours(0, 0, 0, 0);
  return date;
};

/**
 * Return today's date.
 *
 * @function
 * @returns {Date}
 * @example
 *
 * today();
 */
var today = function() {
  return clearTime(new Date());
};

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
var getDaysInMonth = function(year, month) {
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
var daysInYear = function(year) {
  return isLeapYear(year) ? 366 : 365;
};

/**
 * Access Date by specified method.
 *
 * @function
 * @param {Date} date A manipulated date
 * @param {String} unit The method of Date instance
 * @param {Number} value Value to be set
 * @returns {Date}
 * @example
 *
 * const date = new Date('2020/2/2');
 *
 * // -> 2020
 * accessor(date, 'FullYear');
 *
 * // -> Sun Feb 02 2022 00:00:00 GMT+0800
 * accessor(date, 'FullYear', 2022);
 */
var accessor = function(date, unit, value) {
  if (
    {}.toString.call(date).slice(8, -1) === 'Date' &&
    typeof unit === 'string'
  ) {
    if (!value) {
      return date['get' + unit]() + (unit === 'Month' ? 1 : 0);
    }
    date['set' + unit].call(date, value);
  }
  return date;
};

/**
 * Gets or sets the value of the year.
 *
 * @function
 * @param {Date} date Date of year to be acquired
 * @param {Number} value The value of year to be set
 * @returns {Date|Number} Return year or date object
 * @example
 *
 * const date = new Date('2020/2/2');
 * // -> 2020
 * years(date);
 *
 * // -> Sun Feb 02 2022 00:00:00 GMT+0800
 * years(date, 2022);
 */
var years = function(date, value) {
  return accessor.call(null, date, 'FullYear', value);
};

/**
 * Gets or sets the value of the month.
 *
 * @function
 * @param {Date} date Date of month to be acquired
 * @param {Number} value The value of month to be set
 * @returns {Date|Number} Return month or date object
 * @example
 *
 * const date = new Date('2020/2/2');
 * // -> 2
 * months(date);
 *
 * // -> Mon Mar 02 2020 00:00:00 GMT+0800
 * months(date, 3);
 */
var months = function(date, value) {
  return accessor.call(null, date, 'Month', value ? value - 1 : value);
};

/**
 * Gets or sets the value of the day.
 *
 * @function
 * @param {Date} date Date of day to be acquired
 * @param {Number} value The value of day to be set
 * @returns {Date|Number} Return day or date object
 * @example
 *
 * const date = new Date('2020/2/2');
 * // -> 2
 * days(date);
 *
 * // -> Mon Feb 03 2020 00:00:00 GMT+0800
 * days(date, 3);
 */
var days = function(date, value) {
  return accessor.call(null, date, 'Date', value);
};

/**
 * Gets or sets the value of the hour.
 *
 * @function
 * @param {Date} date Date of hour to be acquired
 * @param {Number} value The value of hour to be set
 * @returns {Date|Number} Return hour or date object
 * @example
 *
 * const date = new Date('2020/2/2 10:10:10');
 * // -> 10
 * hours(date);
 *
 * // -> Mon Feb 03 2020 12:10:10 GMT+0800
 * hours(date, 12);
 */
var hours = function(date, value) {
  return accessor.call(null, date, 'Hours', value);
};

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
var minutes = function(date, value) {
  return accessor.call(null, date, 'Minutes', value);
};

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
var seconds = function(date, value) {
  return accessor.call(null, date, 'Seconds', value);
};

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
var milliseconds = function(date, value) {
  return accessor.call(null, date, 'Milliseconds', value);
};

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
var weeks = function(date, value) {
  var method = 'Date';
  // Get the weeek
  if (value) {
    return accessor.call(
      null,
      date,
      method,
      accessor.call(null, date, method) + value * 7
    );
  }
  var dt = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  dt.setUTCDate(dt.getUTCDate() + 4 - (dt.getUTCDay() || 7));
  // Get first day of year
  var start = new Date(Date.UTC(dt.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  return Math.ceil(((dt.getTime() - start.getTime()) / 86400000 + 1) / 7);
};

/**
 * Retruns the current time.
 *
 * @function
 * @returns {Number}
 */
var now = function() {
  return new Date().getTime();
};

export { accessor, clearTime, compare, days, daysInYear, format, getDaysInMonth, hours, isLeapYear, milliseconds, minutes, months, now, seconds, today, weeks, years };

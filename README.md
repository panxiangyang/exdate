# exdate

A JavaScript date utility library.

- Works in IE8+
- Accepts any character
- Heavily tested
- No dependency
- Supports CommonJS/ES Module/UMD

## Installation

### Direct download

Download the script from `dist/exdate.umd.js` and include it.

```html
<script src="/path/to/exdate.umd.js"></script>
```

### Package Managers

```
npm install exdate --save
```

## Basic Usage

### UMD

```javascript
const current = new Date('2020/10/06 10:10:10');

// -> 2020-10-06 10:10:10
Exd.format(current, 'yyyy-MM-dd HH:mm:ss');
```

### CJS / ES

```javascript
import { format } from 'exdate';

const current = new Date('2020/10/06 10:10:10');

// -> 2020-10-06 10:10:10
format(current, 'yyyy-MM-dd HH:mm:ss');
```

## API

| Method             | Parameter  | Returns  | Describe     |
| ------------------ | --------------- | -------- | ---------------- |
| accessor | (date: Date, unit: string, value?: number[]) | Date or Number | Access Date by specified method. |
| clearTime | (date: Date) | Date | Clear the time of specified date. |
| compare | (date: Date, subdate: Date) | Number | Compare the specified date and subdate, if date is larger than subdate, return 1, date less than subdate, return -1, date equal subdate, return 0. |
| days | (date: Date, value?: number) | Date or Number | Gets or sets the value of the day. |
| daysInYear | (year: number) | Number | Returns the days of years. |
| format | (date: Date, format: string = 'yyyy-MM-dd HH:mm:ss') | String | Convert Date to String in a specified format. |
| getDaysInMonth | (year: number, month: number) | Number | Returns the number of days for a specified month. |
| hours | (date: Date, value?: number) | Date or Number | Gets or sets the value of the hour. |
| isLeapYear | (year: number) | Boolean | Determine wether the input is leap year. |
| milliseconds | (date: Date, value?: number) | Date or Number | Gets or sets the value of the milliseconds. |
| minutes | (date: Date, value?: number) | Date or Number |  Gets or sets the value of the minutes. |
| months | (date: Date, value?: number) | Date or Number | Gets or sets the value of the month. |
| now | () | Number | Retruns the current time. |
| seconds | (date: Date, value?: number) | Date or Number |  Gets or sets the value of the seconds. |
| today | () | Date | Return today's date. |
| weeks | (date: Date, value?: number) | Date or Number |  Gets or sets the value of the week. |
| years | (date: Date, value?: number) | Date or Number |  Gets or sets the value of the years. |

import 'mocha';
import { expect } from 'chai';
import isLeapYear from '@/isLeapYear';

describe('isLeapYear', () => {
  it('returns true', () => {
    expect(isLeapYear(2000)).to.be.true;
  });

  it('returns false', () => {
    expect(isLeapYear(2019)).to.be.false;
  });
});

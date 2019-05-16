import 'mocha';
import { expect } from 'chai';
import daysInYear from '@/daysInYear';

describe('daysInYear', () => {
  it('returns 365', () => {
    expect(daysInYear(2019)).to.be.equal(365);
  });

  it('returns 366', () => {
    expect(daysInYear(2000)).to.be.equal(366);
  });
});

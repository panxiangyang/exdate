import 'mocha';
import { expect } from 'chai';
import getDaysInMonth from '@/getDaysInMonth';

describe('getDaysInMonth', () => {
  it('returns 28', () => {
    expect(getDaysInMonth(2019, 2)).to.equal(28);
  });

  it('returns 29', () => {
    expect(getDaysInMonth(2000, 2)).to.equal(29);
  });

  it('returns 31', () => {
    expect(getDaysInMonth(2019, 1)).to.equal(31);
    expect(getDaysInMonth(2019, 3)).to.equal(31);
    expect(getDaysInMonth(2019, 5)).to.equal(31);
    expect(getDaysInMonth(2019, 7)).to.equal(31);
    expect(getDaysInMonth(2019, 8)).to.equal(31);
    expect(getDaysInMonth(2019, 10)).to.equal(31);
    expect(getDaysInMonth(2019, 12)).to.equal(31);
  });

  it('returns 30', () => {
    expect(getDaysInMonth(2019, 4)).to.equal(30);
    expect(getDaysInMonth(2019, 6)).to.equal(30);
    expect(getDaysInMonth(2019, 9)).to.equal(30);
    expect(getDaysInMonth(2019, 11)).to.equal(30);
  });
});

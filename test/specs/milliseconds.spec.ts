import 'mocha';
import { expect } from 'chai';
import milliseconds from '@/milliseconds';

describe('milliseconds', () => {
  it('returns milliseconds', () => {
    const date = new Date('2020/1/1 10:10:10:10');
    expect(milliseconds(date)).to.be.equal(10);
  });

  it('set a milliseconds to a date', () => {
    const date = new Date('2020/1/1 10:10:10:10');
    const ndate = milliseconds(date, 20) as Date;
    expect(ndate.getMilliseconds()).to.be.equal(20);
  });
});

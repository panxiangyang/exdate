import 'mocha';
import { expect } from 'chai';
import months from '@/months';

describe('months', () => {
  it('returns months', () => {
    const date = new Date('2020/1/1 10:10:10:10');
    expect(months(date)).to.be.equal(1);
  });

  it('set a months to a date', () => {
    const date = new Date('2020/1/1 10:10:10:10');
    const ndate = months(date, 2) as Date;
    expect(ndate.getMonth() + 1).to.be.equal(2);
  });
});

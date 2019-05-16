import 'mocha';
import { expect } from 'chai';
import hours from '@/hours';

describe('hours', () => {
  it('returns hour value', () => {
    const date = new Date('2020/2/2 10:10:10');
    expect(hours(date)).to.be.equal(10);
  });

  it('Set a hour value to date', () => {
    const date = new Date('2020/2/2 10:10:10');
    const ndate = hours(date, 20) as Date;
    expect(ndate.getHours()).to.be.equal(20);
  });
});

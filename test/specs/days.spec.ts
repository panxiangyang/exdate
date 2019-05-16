import 'mocha';
import { expect } from 'chai';
import days from '@/days';

describe('days', () => {
  it('Get a day of specified date', () => {
    const date = new Date('2020/10/10');
    expect(days(date)).to.be.equal(10);
  });

  it('Set a day of specified date', () => {
    const date = new Date('2020/10/10');
    const ndate = days(date, 20) as Date;
    expect(ndate.getDate()).to.be.equal(20);
  });
});

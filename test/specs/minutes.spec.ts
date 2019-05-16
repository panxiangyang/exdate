import 'mocha';
import { expect } from 'chai';
import minutes from '@/minutes';

describe('minutes', () => {
  it('returns minutes', () => {
    const date = new Date('2020/1/1 10:10:10:10');
    expect(minutes(date)).to.be.equal(10);
  });

  it('set a minutes to a date', () => {
    const date = new Date('2020/1/1 10:10:10:10');
    const ndate = minutes(date, 20) as Date;
    expect(ndate.getMinutes()).to.be.equal(20);
  });
});

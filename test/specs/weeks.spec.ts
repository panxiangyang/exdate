import 'mocha';
import { expect } from 'chai';
import weeks from '@/weeks';

describe('weeks', () => {
  it('returns weeks', () => {
    const date = new Date('2019/1/1');
    expect(weeks(date)).to.be.equal(1);
  });

  it('set a weeks to a date', () => {
    const date = new Date('2020/1/1 10:10:10:10');
    const ndate = weeks(date, 1) as Date;
    expect(ndate.getDate()).to.be.equal(8);
  });

  it(`test sunday's day number 7`, () => {
    // node new Date error in existence
    const date = new Date('2019/5/20 10:10:10:10');
    expect(weeks(date)).to.be.equal(20);
  });
});

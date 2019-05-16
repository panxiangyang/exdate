import 'mocha';
import { expect } from 'chai';
import seconds from '@/seconds';

describe('seconds', () => {
  it('returns seconds', () => {
    const date = new Date('2020/1/1 10:10:10:10');
    expect(seconds(date)).to.be.equal(10);
  });

  it('set a seconds to a date', () => {
    const date = new Date('2020/1/1 10:10:10:10');
    const ndate = seconds(date, 20) as Date;
    expect(ndate.getSeconds()).to.be.equal(20);
  });
});

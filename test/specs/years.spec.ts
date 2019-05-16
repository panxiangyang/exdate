import 'mocha';
import { expect } from 'chai';
import years from '@/years';

describe('years', () => {
  it('returns years', () => {
    const date = new Date('2020/1/1 10:10:10:10');
    expect(years(date)).to.be.equal(2020);
  });

  it('set a years to a date', () => {
    const date = new Date('2020/1/1 10:10:10:10');
    const ndate = years(date, 2025) as Date;
    expect(ndate.getFullYear()).to.be.equal(2025);
  });
});

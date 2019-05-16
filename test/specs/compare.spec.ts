import 'mocha';
import { expect } from 'chai';
import compare from '@/compare';

describe('compare', () => {
  const fdate = new Date('2020/10/06');
  const sdate = new Date('2020/10/01');
  const tdate = new Date('2020/10/08');

  it('returns 1', () => {
    expect(compare(fdate, sdate)).to.be.equal(1);
  });

  it('returns 0', () => {
    expect(compare(fdate, fdate)).to.be.equal(0);
  });

  it('returns -1', () => {
    expect(compare(fdate, tdate)).to.be.equal(-1);
  });

  it('throw TypeError when the input is not a date', () => {
    try {
      const fdate: any = '2020/10/06';
      const sdate: any = '2020/10/08';
      compare(fdate, sdate);
    } catch (error) {
      expect(() => {
        throw new TypeError(error);
      }).to.throw(TypeError);
    }
  });
});

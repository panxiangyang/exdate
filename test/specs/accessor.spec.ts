import 'mocha';
import { expect } from 'chai';
import accessor from '@/accessor';

describe('accecssor', () => {
  it('returns a number when the input is Date and String', () => {
    expect(accessor(new Date(), 'FullYear')).to.be.a('number');
  });

  it('returns a Date', () => {
    const odate = new Date();
    const ndate = accessor(odate, null);
    expect(odate).to.be.equal(ndate);
  });
});

import 'mocha';
import { expect } from 'chai';
import clearTime from '@/clearTime';

describe('clearTime', () => {
  it('returns a date object', () => {
    const ndate = clearTime(new Date('2020/1/1 10:10:10'));
    expect(ndate).to.be.instanceof(Date);
    expect(ndate.getHours()).to.be.equal(0);
    expect(ndate.getMinutes()).to.be.equal(0);
    expect(ndate.getSeconds()).to.be.equal(0);
    expect(ndate.getMilliseconds()).to.be.equal(0);
  });
});

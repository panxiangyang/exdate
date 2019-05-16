import 'mocha';
import { expect } from 'chai';
import today from '@/today';

describe('today', () => {
  it('returns today', () => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    const tday = today();
    expect(tday.getFullYear()).to.be.equal(date.getFullYear());
    expect(tday.getMonth()).to.be.equal(date.getMonth());
    expect(tday.getDate()).to.be.equal(date.getDate());
  });
});

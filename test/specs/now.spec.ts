import 'mocha';
import { expect } from 'chai';
import now from '@/now';

describe('now', () => {
  it('returns now', () => {
    expect(now()).to.be.a('number');
  });
});

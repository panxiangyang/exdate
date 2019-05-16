import 'mocha';
import { expect } from 'chai';
import format from '@/format';

describe('format', () => {
  const current = new Date('2020/10/06 10:10:10');

  it('returns yyyy-MM-dd HH:mm:ss by default', () => {
    expect(format(current)).to.equal('2020-10-06 10:10:10');
  });

  it('returns yyyy-MM-dd', () => {
    expect(format(current, 'yyyy-MM-dd')).to.equal('2020-10-06');
  });

  it('returns MM-dd', () => {
    expect(format(current, 'MM-dd')).to.equal('10-06');
  });

  it('returns yyyy-M-d', () => {
    expect(format(current, 'yyyy-M-d')).to.equal('2020-10-6');
  });

  it('returns yyyy-MM-dd HH', () => {
    expect(format(current, 'yyyy-MM-dd HH')).to.equal('2020-10-06 10');
  });

  it('returns yyyy-MM-dd HH:mm', () => {
    expect(format(current, 'yyyy-MM-dd HH:mm')).to.equal('2020-10-06 10:10');
  });

  it('returns yyyy-MM-dd HH:mm:ss', () => {
    expect(format(current, 'yyyy-MM-dd HH:mm:ss')).to.equal(
      '2020-10-06 10:10:10'
    );
  });

  it('returns HH:mm:ss', () => {
    expect(format(current, 'HH:mm:ss')).to.equal('10:10:10');
  });

  it('returns yyyy-MM-dd hh:mm:ss', () => {
    expect(format(current, 'yyyy-MM-dd hh:mm:ss')).to.equal(
      '2020-10-06 10:10:10'
    );
  });

  it('returns yyyy年MM月dd日 hh时mm分ss秒', () => {
    expect(format(current, 'yyyy年MM月dd日 hh时mm分ss秒')).to.equal(
      '2020年10月06日 10时10分10秒'
    );
  });

  it('process hours', () => {
    const date = new Date('2020/10/06 12:12:12');
    expect(format(current, 'yyyy年MM月dd日 hh时mm分ss秒')).to.equal(
      '2020年10月06日 10时10分10秒'
    );
  });
});

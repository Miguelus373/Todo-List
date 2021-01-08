import setStorage from './set-storage';

describe('set Storage', () => {
  it('returns undefined if the value is given', () => {
    expect(setStorage('str', ['projects'])).toBeUndefined();
  });
});
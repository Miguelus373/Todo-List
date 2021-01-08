import userStorage from './use-storage';

describe('Use Storage', () => {
  it('returns undefined if the value is given', () => {
    expect(userStorage('str', ['projects'])).toBeUndefined();
  });

  it('returns an object if the value isn"t given', () => {
    expect(userStorage('str')).toBeInstanceOf(Object);
  });
});
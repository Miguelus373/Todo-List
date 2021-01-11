import setStorage from './set-storage';

describe('Set Storage', () => {
  it('Sets an item to the local storage', () => {
    setStorage('projectList', ['Global']);

    expect(localStorage.getItem('projectList')).toBe('["Global"]');
  });

  it("Doesn's set and item if it already exists in the local storage", () => {
    localStorage.setItem('projectList', '["Global"]');
    setStorage('projectList', ['Different Project']);
    expect(localStorage.getItem('projectList')).toBe('["Global"]');
  });
});
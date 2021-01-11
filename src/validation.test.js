import validation from './validation';

describe('Project Validation', () => {
  it('Returns true if project name is not in the projects array', () => {
    expect(validation(['Global'], 'New Project')).toBeTruthy();
  });

  it('Returns false if project name is already in the project array', () => {
    expect(validation(['Global'], 'Global')).toBeFalsy();
  });

  it('ReturnsFalse if project name is empty', () => {
    expect(validation(['Global'], '')).toBeFalsy();
  });
});
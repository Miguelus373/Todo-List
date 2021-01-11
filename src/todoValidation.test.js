import validation from './todoValidation';

describe('Todo Validation', () => {
  it('Returns true if no field is empty', () => {
    expect(validation(['Title', 'Description', 'Date'])).toBeTruthy();
  });

  it('Returns false if any field is empty', () => {
    expect(validation(['Title', 'Description', ''])).toBeFalsy();
  });
});
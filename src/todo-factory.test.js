import todoFactory from './todo-factory';

describe('TodoFactory', () => {
  it('Returns a new todo object', () => {
    const newTodo = todoFactory(
      'Title', 'Description', 'Date', 'Priority', 'Project',
    );

    expect(newTodo).toBeInstanceOf(Object);
  });

  it('Returns any property value if requested', () => {
    const newTodo = todoFactory(
      'Title', 'Description', 'Date', 'Priority', 'Project',
    );

    expect(newTodo.description).toBe('Description');
  });
});
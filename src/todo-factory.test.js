import todoFactory from './todo-factory';

describe('TodoFactory', () => {
  const newTodo = todoFactory(
    'Title', 'Description', 'Date', 'Priority', 'Project',
  );

  it('Returns a new todo object', () => {
    expect(newTodo).toBeInstanceOf(Object);
  });

  it('Returns any property value if requested', () => {
    expect(newTodo.title).toBe('Title');
  });

  it('Returns any property value if requested', () => {
    expect(newTodo.description).toBe('Description');
  });

  it('Returns any property value if requested', () => {
    expect(newTodo.dueDate).toBe('Date');
  });

  it('Returns any property value if requested', () => {
    expect(newTodo.priority).toBe('Priority');
  });

  it('Returns any property value if requested', () => {
    expect(newTodo.project).toBe('Project');
  });
});
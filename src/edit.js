import useStorage from './use-storage';
import formload from './form-load';
import todoValid from './todoValidation';
import newTodo from './todo-factory';
// eslint-disable-next-line import/no-cycle
import updateContent from './update-content';

const editButton = () => {
  const editBtn = document.querySelectorAll('.edit');
  editBtn.forEach(btn => btn.addEventListener('click', (e) => {
    const flash = document.getElementById('flash');
    flash.innerHTML = '';

    const todo = useStorage('todoList')[e.target.parentNode.id];
    formload('edit', todo);

    const updateBtn = document.getElementById('update');
    updateBtn.addEventListener('click', () => {
      const formValues = [...document.querySelector('form')].map(i => i.value);
      if (todoValid(formValues)) {
        const newTodoList = useStorage('todoList');
        newTodoList[e.target.parentNode.id] = newTodo(...formValues, todo.priority, todo.project);
        useStorage('todoList', newTodoList);
        updateContent();
      } else {
        flash.innerHTML = 'There are some fields missing, please try again';
      }
    });
  }));
};

export { editButton as default };
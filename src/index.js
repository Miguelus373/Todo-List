import './styles.css';
import todo from './todo-factory';
import useStorage from './use-storage';
import setStorage from './set-storage';
import valid from './validation';
import todoValid from './todoValidation';
import form from './form-load';
import updateContent from './update-content';

const addTodo = document.getElementById('add-todo');
const newProjet = document.getElementById('new-project');
const flash = document.getElementById('flash');

setStorage('projectList', ['Global']);
setStorage('todoList', []);

updateContent();

addTodo.addEventListener('click', () => {
  flash.innerHTML = '';
  form('todo', useStorage('projectList'));
  const addBtn = document.getElementById('add');
  addBtn.addEventListener('click', () => {
    const formValues = [...document.querySelector('form')].map(i => i.value);
    if (todoValid(formValues)) {
      const newTodoList = useStorage('todoList');
      newTodoList.push(todo(...formValues));
      useStorage('todoList', newTodoList);
      updateContent();
    } else {
      flash.innerHTML = 'There are some fields missing, please try again';
    }
  });
});

newProjet.addEventListener('click', () => {
  flash.innerHTML = '';
  form('project');
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', () => {
    const formValues = document.querySelector('input').value;
    if (valid(useStorage('projectList'), formValues)) {
      const newProjectList = useStorage('projectList');
      newProjectList.push(formValues);
      useStorage('projectList', newProjectList);
      updateContent();
    } else {
      flash.innerHTML = 'That project name cannot be used';
    }
  });
});

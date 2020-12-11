import './styles.css';
import todo from './todo-factory';
import form from './form-load';
import useStorage from './use-storage';
import setStorage from './set-storage';
import valid from './validation';
import todoValid from './todoValidation';
import display from './display';
import deleteEvent from './delete_button';
import editEvent from './edit';

const addTodo = document.getElementById('add-todo');
const newProjet = document.getElementById('new-project');
const formContainer = document.getElementById('form-container');
const contentDiv = document.getElementById('content');
const flash = document.getElementById('flash');

const projectList = setStorage('projectList', ['Global']);
const todoList = setStorage('todoList', []);

display(projectList, todoList, contentDiv);
deleteEvent(todoList);

addTodo.addEventListener('click', () => {
  flash.innerHTML = '';
  form('todo', formContainer, useStorage('projectList'));
  const addBtn = document.getElementById('add');
  addBtn.addEventListener('click', () => {
    const formValues = [...document.querySelector('form')].map(i => i.value);
    if (todoValid(formValues)) {
      todoList.push(todo(...formValues));
      useStorage('todoList', todoList);
      display(projectList, todoList, contentDiv);
      deleteEvent(todoList);
    } else {
      flash.innerHTML = 'There are some fields missing, please try again';
    }
  });
});

newProjet.addEventListener('click', () => {
  flash.innerHTML = '';
  form('project', formContainer);
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', () => {
    const formValues = document.querySelector('input').value;
    if (valid(useStorage('projectList'), formValues)) {
      projectList.push(formValues);
      useStorage('projectList', projectList);
      display(projectList, todoList, contentDiv);
      deleteEvent(todoList);
    } else {
      flash.innerHTML = 'That project name cannot be used';
    }
  });
});
 editEvent(formContainer);
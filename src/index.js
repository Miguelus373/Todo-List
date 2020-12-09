import './styles.css';
import todo from './todo-factory';
import form from './form-load';
import useStorage from './use-storage';
import setStorage from './set-storage';
import valid from './validation';
import todoValid from './todoValidation';

const addTodo = document.getElementById('add-todo');
const newProjet = document.getElementById('new-project');
const formContainer = document.getElementById('form-container');

const projectList = setStorage('projectList', ['Global']);
const todoList = setStorage('todoList', []);

addTodo.addEventListener('click', () => {
  form('todo', formContainer, useStorage('projectList'));
  const addBtn = document.getElementById('add');
  addBtn.addEventListener('click', () => {
    const formValues = [...document.querySelector('form')].map(i => i.value);
    if (todoValid(formValues)) {
      todoList.push(todo(...formValues));
      useStorage('todoList', todoList);
    } else {
      alert('Check your data and try again');
    }
  });
});

newProjet.addEventListener('click', () => {
  form('project', formContainer);
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', () => {
    const formValues = document.querySelector('input').value;
    if (valid(useStorage('projectList'), formValues)) {
      projectList.push(formValues);
      useStorage('projectList', projectList);
    } else {
      alert('project name has already been used');
    }
  });
});

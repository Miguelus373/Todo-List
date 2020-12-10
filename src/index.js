import './styles.css';
import todo from './todo-factory';
import form from './form-load';
import useStorage from './use-storage';
import setStorage from './set-storage';
import valid from './validation';
import todoValid from './todoValidation';
import display from './display';

const addTodo = document.getElementById('add-todo');
const newProjet = document.getElementById('new-project');
const formContainer = document.getElementById('form-container');
const contentDiv = document.getElementById('content');

const projectList = setStorage('projectList', ['Global']);
const todoList = setStorage('todoList', []);

display(projectList, todoList, contentDiv);

addTodo.addEventListener('click', () => {
  form('todo', formContainer, useStorage('projectList'));
  const addBtn = document.getElementById('add');
  addBtn.addEventListener('click', () => {
    const formValues = [...document.querySelector('form')].map(i => i.value);
    if (todoValid(formValues)) {
      todoList.push(todo(...formValues));
      useStorage('todoList', todoList);
      display(projectList, todoList, contentDiv);
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
      display(projectList, todoList, contentDiv);
    } else {
      alert('project name has already been used');
    }
  });
});

const deleteBtn = document.querySelectorAll('.delete-btn');
deleteBtn.forEach( btn => btn.addEventListener('click', (e) => {
  const parent = e.target.parentNode;

  todoList.splice(parent.id, 1);
  useStorage('todoList', todoList);
  parent.remove();
}));
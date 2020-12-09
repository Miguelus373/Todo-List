import './styles.css';
import todo from './todo-factory';
import form from './form-load';
import useStorage from './use-storage';
import setStorage from './set-storage';
import valid from './validation';

const addTodo = document.getElementById('add-todo');
const newProjet = document.getElementById('new-project');
const formContainer = document.getElementById('form-container');

const projectList = setStorage('projectList', ['Global']);
const todoList = setStorage('todoList', []);

addTodo.addEventListener('click', () => {
  form('todo', formContainer, useStorage('projectList'));
  const addBtn = document.getElementById('add');
  addBtn.addEventListener('click', () => {
    todoList.push(todo(...[...document.querySelector('form')].map(i => i.value)));
    useStorage('todoList', todoList);
  });
});

newProjet.addEventListener('click', () => {
  form('project', formContainer);
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', () => {
    if (valid(useStorage('projectList'), document.querySelector('input').value)) {
      projectList.push(document.querySelector('input').value);
      useStorage('projectList', projectList);
    } else {
      alert('project name has already been used');
    }
  });
});

valid();

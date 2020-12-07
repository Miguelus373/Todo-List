import './styles.css';
import todo from './todo-factory';
import form from './form-load';
import useStorage from './use-storage';
import setStorage from './set-storage';

const addTodo = document.getElementById('add-todo');
const newProjet = document.getElementById('new-project');
const formContainer = document.getElementById('form-container');

const projectList = ['Global'];
const todoList = [];

setStorage('projectList', projectList);
setStorage('todoList', todoList);

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
    projectList.push(document.querySelector('input').value);
    useStorage('projectList', projectList);
  });
});

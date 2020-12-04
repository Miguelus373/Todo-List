import './styles.css';
import todo from './todo-factory';
import form from './form-load';

const addTodo = document.getElementById('add-todo');
const newProjet = document.getElementById('new-project');
const formContainer = document.getElementById('form-container');

addTodo.addEventListener('click', () => {
  form('todo', formContainer);
});

newProjet.addEventListener('click', () => {
  form('project', formContainer);
});

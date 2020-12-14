import useStorage from './use-storage';

const deleteEvent = () => {
  const deleteBtn = document.querySelectorAll('.delete');
  deleteBtn.forEach(btn => btn.addEventListener('click', (e) => {
    const parent = e.target.parentNode;

    const todos = useStorage('todoList');
    todos.splice(parent.id, 1);
    useStorage('todoList', todos);
    parent.remove();
    deleteEvent(todos);
  }));
};

export { deleteEvent as default };
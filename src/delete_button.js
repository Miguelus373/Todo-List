import useStorage from './use-storage';

const deleteEvent = (todoList) => {
  const deleteBtn = document.querySelectorAll('.delete-btn');
  deleteBtn.forEach(btn => btn.addEventListener('click', (e) => {
    const parent = e.target.parentNode;

    todoList.splice(parent.id, 1);
    useStorage('todoList', todoList);
    parent.remove();
    deleteEvent(todoList);
  }));
};

export { deleteEvent as default };
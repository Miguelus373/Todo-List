const displayProjectTodo = (projectArr, todoArr, content) => {
  projectArr.map(projectTitle => {
    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'project-div');
    projectDiv.innerHTML = `
    <h1>${projectTitle}</h1>
    <div class="todos-div">
    ${todoArr.map((todo, index) => {
    if (todo.project === projectTitle) {
      return `
      <ul class="todo-info" id="${index}">
      <li>${todo.title}</li>
      <li>${todo.description}</li>
      <li>${todo.dueDate}</li>
      <li>${todo.priority}</li>
      <button id= "#btn-delete" class="delete-btn">Delete</button>
            </ul>`;
    }
  }).join('')}
    </div>`;

    content.appendChild(projectDiv);
  });
};

export { displayProjectTodo as default };
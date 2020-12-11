const displayProjectTodo = (projectArr, todoArr, content) => {
  content.innerHTML = '';

  projectArr.forEach(projectTitle => {
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
        <button class="delete-btn">Done</button>
      </ul>`;
    }
    return '';
  }).join('')}
    </div>`;

    content.appendChild(projectDiv);
  });
};

export { displayProjectTodo as default };
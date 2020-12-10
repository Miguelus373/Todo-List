const displayProjectTodo = (projectArr, todoArr, content) => {
  projectArr.map(item => {
    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'project-div');
    projectDiv.innerHTML = `
    <h1>${item}</h1>
    <div class="todos-div">
      <ul class="todo-info">
        <li>${todoArr[0].title}</li>
        <li>${todoArr[0].description}</li>
        <li>${todoArr[0].dueDate}</li>
        <li>${todoArr[0].priority}</li>
      </ul>
    </div>
    `;

    content.appendChild(projectDiv);
  });
};

export { displayProjectTodo as default };
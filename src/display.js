const displayProjectTodo = (arr, content) => {
 arr.map(item => {
    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('class','project-div');
    projectDiv.innerHTML = `
    <h1>${item}</h1>
    <div class="todos-div">
      <ul class="todo-info">
        <li>Todo title</li>
        <li>Description</li>
        <li>01/01/2021</li>
        <li>High</li>
      </ul>
    </div>
    `;
    content.appendChild(projectDiv);
 });
};

export { displayProjectTodo as default };
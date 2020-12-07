const formLoad = (form, container, projects) => {
  if (form === 'todo') {
    container.innerHTML = `
      <form class="form">
        <a href="#" class="close">x</a>
        <label for="todo">Title</label>
        <input type="text" name="todo" >
        <label for="description">Description</label>
        <input type="text" name="description" >
        <label for="dueDate">Due Date</label>
        <input type="date" name="dueDate" >
        <label>Set Priority</label>
        <select>
        <option>High priority</option>
        <option>Mid priority</option>
        <option selected>Low priority</option>
        </select>
        <label>Select a Project</label>
        <select id="projects">
        </select>
        </form>
      <button type="button" id="add">Add</button>
    `;

    const select = document.getElementById('projects');

    projects.forEach(project => {
      const slctProject = document.createElement('option');
      slctProject.innerHTML = project;

      select.appendChild(slctProject);
    });
  } else if (form === 'project') {
    container.innerHTML = `
    <form class="form">
      <a href="#" class="close">x</a>
      <label for="name">Name</label>
      <input type="text" name="name" >
      <button type="button" id="create">Create</button>
    </form>
    `;
  }
};

export { formLoad as default };
const formLoad = (form, container, projects) => {
  if (form === 'todo') {
    container.innerHTML = `
    <div class="login-box">
    <h2>Add New Todo</h2>
    <a href="#" class="close">x</a>
    <form>
      <div class="user-box">
        <input type="text" name="todo" required="">
        <label>Project Title</label>
      </div>
      <div class="user-box">
        <input type="text" name="description" required="">
        <label>Description</label>
      </div>
      <div class="user-box">
        <input type="date" name="dueDate" >
        <label>Due Date</label>
      </div>
      <div class="select">
      <select name="slct">
      <option selected disabled>Set the priorty </option>
      <option value="1">High</option>
      <option value="2">Medium</option>
      <option value="3">Low</option>
      </select>
      </div>
      <div class="select">
        <select name="slct" id="projects">
          <option selected disabled>Select a project</option>
        </select>
      </div>
      <a href="#" id="add">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Add
      </a>
    </form>
    </div>`;

    const select = document.getElementById('projects');

    projects.forEach(project => {
      const slctProject = document.createElement('option');
      slctProject.innerHTML = project;

      select.appendChild(slctProject);
    });
  } else if (form === 'project') {
    container.innerHTML = `
    <div class="login-box">
    <a href="#" class="close">x</a>
    <h2>Create A New Project</h2>
    <form>
      <div class="user-box">
        <input type="text" name="name" required="">
        <label>Project Title</label>
      </div>
      <a href="#" id="create">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Create
      </a>
    </form>
    </div>
    `;
  }
};

export { formLoad as default };
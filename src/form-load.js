const formLoad = (form, container, projects) => {
  if (form === 'todo') {
    container.innerHTML = `
    <div class="login-box">
    <h2>Add New Todo</h2>
    <a href="#" class="close">x</a>
    <form>
      <label>Todo Title</label>
      <div class="user-box">
        <input type="text" name="todo">
      </div>
      <label>Description</label>
      <div class="user-box">
        <input type="text" name="description">
      </div>
      <label>Due Date</label>
      <div class="user-box">
        <input type="date" name="dueDate">
      </div>
      <label>Set the priority</label>
      <div class="select user-box">
        <select name="slct">
          <option>High</option>
          <option>Medium</option>
          <option selected>Low</option>
        </select>
        </div>
      <label>Select a project</label>
      <div class="select user-box">
        <select name="slct" id="projects">
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
    <label>Project Title</label>
      <div class="user-box">
        <input type="text" name="name" required="">
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
  } else if (form === 'edit') {
    container.innerHTML = `
    <div class="login-box">
    <h2>Edit Todo</h2>
    <a href="#" class="close">x</a>
    <form>
      <label>Todo Title</label>
      <div class="user-box">
        <input type="text" name="todo">
      </div>
      <label>Description</label>
      <div class="user-box">
        <input type="text" name="description">
      </div>
      <label>Due Date</label>
      <div class="user-box">
        <input type="date" name="dueDate">
      </div>
      <label>Set the priority</label>
      <div class="select user-box">
        <select name="slct">
          <option>High</option>
          <option>Medium</option>
          <option selected>Low</option>
        </select>
        </div>
      <label>Select a project</label>
      <div class="select user-box">
        <select name="slct" id="projects">
        </select>
      </div>
      <a href="#" id="add">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Update
      </a>
    </form>
    </div>`;
  }
};

export { formLoad as default };
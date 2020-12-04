const formLoad = (form, container) => {
  if (form === 'todo') {
    container.innerHTML = `
      <form class="form">
        <a href="#" class="close">x</a>
        <label for="todo">Title</label>
        <input type="text" name="todo" >
        <label for="description">Description</label>
        <input type="text" name="description" >
        <label for="dueDate">Due Date</label>
        <input type="datetime-local" name="dueDate" >
        <label >Set Priority</label>
        <select>
        <option>High priority</option>
        <option>Mid priority</option>
        <option selected>Low priority</option>
        </select>
        </form>
      <button type="button" id="add">Add</button>
    `;
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
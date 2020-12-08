// const contents = document.getElementById('content');
const todoForm = (content) => {
  const todoContent = document.createElement('div');
  todoContent.classList.add('login-box');
  todoContent.innerHTML = `
  <h2>Create A New Project</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required="">
      <label>Project Title</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required="">
      <label>Description</label>
    </div>
    <div class="user-box">
      <input type="date" name="dueDate" >
      <label>Due Date</label>
    </div>
    <div class="select">
      <select name="slct" id="slct">
        <option selected disabled>Choose a priorty </option>
        <option value="1">low</option>
        <option value="2">medium</option>
        <option value="3">high</option>
      </select>
    </div>

    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>`;
  content.appendChild(todoContent);
};

export { todoForm as default };
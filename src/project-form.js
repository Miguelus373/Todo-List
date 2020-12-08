// const contents = document.getElementById('content');
const projectForm = (content) => {
  const projectContent = document.createElement('div');
  projectContent.classList.add('login-box');
  projectContent.innerHTML = `
  <h2>Create A New Project</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required="">
      <label>Project Title</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>`;

  content.appendChild(projectContent);
};

export { projectForm as default };
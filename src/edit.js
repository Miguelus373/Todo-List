import useStorage from './use-storage';
import formload from './form-load';

const editButton = (container) => {
  const editBtn = document.querySelectorAll('.edit-btn');
  editBtn.forEach(btn => btn.addEventListener('click', (e) => {
    const parent = e.target.parentNode;
    formload('edit', container, parent);
    
  }));
};

export { editButton as default };
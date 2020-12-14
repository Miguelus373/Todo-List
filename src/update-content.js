import storage from './use-storage';
import display from './display';
import deleteEvent from './delete_button';
// eslint-disable-next-line import/no-cycle
import editEvent from './edit';

const update = () => {
  display(storage('projectList'), storage('todoList'));
  deleteEvent();
  editEvent();
};

export { update as default };
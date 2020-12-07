import storage from './use-storage';

const setStorage = (item, array) => {
  if (storage(item) === null) {
    storage(item, array);
  }
};

export { setStorage as default };
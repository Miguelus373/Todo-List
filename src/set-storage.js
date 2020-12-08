import storage from './use-storage';

const setStorage = (item, array) => {
  if (storage(item) === null) {
    storage(item, array);
    return array;
  }

  return storage(item);
};

export { setStorage as default };
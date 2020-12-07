const useStorage = (key, value) => {
  if (value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  return JSON.parse(localStorage.getItem(key));
};

export { useStorage as default };
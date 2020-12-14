const valid = (arr, str) => {
  if (arr.includes(str) || str === '') {
    return false;
  }
  return true;
};

export { valid as default };
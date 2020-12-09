const valid = (arr, str) => {
  if (arr.includes(str)) {
    return false;
  }
  return true;
};

export { valid as default };
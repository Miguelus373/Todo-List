const todoValid = (form) => form.every(value => value !== '');

export { todoValid as default };
const maxLength = (key: string, max: number) =>
  key + ` : must have less than ${max} characters`;

const minLength = (key: string, min: number) =>
  key + ` : must have at least ${min} characters`;

const required = (key: string) => key + ' is required';

export default {
  maxLength,
  minLength,
  required,
};

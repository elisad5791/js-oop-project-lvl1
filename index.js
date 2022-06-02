import Validator from './validator.js';

const v = new Validator();

const schema = v.array();
console.log(schema.isValid(null)); // true
schema.required();
console.log(schema.isValid(null)); // false
console.log(schema.isValid([])); // true
console.log(schema.isValid(['hexlet'])); // true
schema.sizeof(2);
console.log(schema.isValid(['hexlet'])); // false
console.log(schema.isValid(['hexlet', 'code-basics'])); // true

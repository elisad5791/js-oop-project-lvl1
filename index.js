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

/* const fn = (value, start) => value.startsWith(start);
v.addValidator('string', 'startWith', fn);
const schema = v.string().test('startWith', 'H');
console.log(schema.isValid('exlet')); // false
console.log(schema.isValid('Hexlet')); // true */

/* const fn = (value, min) => value >= min;
v.addValidator('number', 'min', fn);
const schema = v.number().test('min', 5);
console.log(schema.isValid(4)); // false
console.log(schema.isValid(6)); // true */

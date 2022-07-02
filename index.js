import Validator from './validator.js';

const v = new Validator();
const schema = v.array();
schema.required().sizeof(2);

console.log('Проверка: массив из двух элементов');
console.log('null - ', schema.isValid(null));
console.log('[] - ', schema.isValid([]));
console.log('[hexlet] - ', schema.isValid(['hexlet']));
console.log('[hexlet, code-basics] - ', schema.isValid(['hexlet', 'code-basics']));

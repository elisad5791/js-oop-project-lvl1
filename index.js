import Validator from "./validator.js";

const v = new Validator();

const schema = v.string();

console.log(schema.isValid(''));
console.log(schema.isValid(null));
console.log(schema.isValid(undefined));

schema.required();
schema.minLength(7);

console.log(schema.isValid('what does the fox say'));
console.log(schema.isValid('hexlet'));
console.log(schema.isValid(null));
console.log(schema.isValid(''));

console.log(schema.contains('what').isValid('what does the fox say'));
console.log(schema.contains('whatthe').isValid('what does the fox say'));
console.log(schema.isValid('what does the fox say'));
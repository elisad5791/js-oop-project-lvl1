import Schema from './schema.js';

class NumberSchema extends Schema {
  constructor(validator) {
    super(validator);
    this.checks = ['number'];
    this.params = {};
  }

  required() {
    this.checks.push('required');
    return this;
  }

  positive() {
    this.checks.push('positive');
    return this;
  }

  range(num1, num2) {
    this.checks.push('range');
    this.params.range = [num1, num2];
    return this;
  }
}

export default NumberSchema;

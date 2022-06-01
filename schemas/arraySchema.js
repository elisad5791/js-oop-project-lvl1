import Schema from './schema.js';

class ArraySchema extends Schema {
  constructor(validator) {
    super(validator);
    this.checks = ['array'];
    this.params = {};
  }

  required() {
    this.checks.push('required');
    return this;
  }

  sizeof(num) {
    this.checks.push('sizeof');
    this.params.size = num;
    return this;
  }
}

export default ArraySchema;

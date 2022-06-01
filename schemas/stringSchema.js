import Schema from './schema.js';

class StringSchema extends Schema {
  constructor(validator) {
    super(validator);
    this.checks = ['string'];
    this.params = {};
  }

  required() {
    this.checks.push('required');
    return this;
  }

  minLength(len) {
    this.checks.push('minLength');
    this.params.minLength = len;
    return this;
  }

  contains(str) {
    this.checks.push('contains');
    this.params.str = str;
    return this;
  }
}

export default StringSchema;

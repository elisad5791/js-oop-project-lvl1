class Validator { 
  constructor() {
    this.checks = [];
    this.params = {};
    this.validations = {
      'string': (val) => typeof val === 'string',
      'required': (val) => val.length > 0,
      'minLength': (val) => val.length >= this.params.minLength,
      'contains': (val) => val.includes(this.params.str),
    };
  }

  isValid(value) {
    return this.checks.every((check) => this.validations[check](value));
  }

  string() {
    this.checks.push('string');
    return this;
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

export default Validator;
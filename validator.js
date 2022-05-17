class Validator { 
  constructor() {
    this.checks = [];
    this.conditions = {
      'string': (val) => typeof val === 'string',
      'required': (val) => val.length > 0,
    };
  }

  isValid(value) {
    this.checks.every((check) => this.conditions[check](value));
  }

  string() {
    this.checks.push('string');
    return this;
  }

  required() {
    this.checks.push('required');
    return this;
  }

}
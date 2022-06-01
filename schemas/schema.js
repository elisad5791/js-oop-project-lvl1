class Schema {
  constructor(validator) {
    this.validator = validator;
  }

  isValid(val) {
    return this.checks.every((check) => this.validator[check](val, this.params));
  }

  test(name, ...args) {
    this.checks.push(name);
    this.params.userParams = args;
    return this;
  }
}

export default Schema;

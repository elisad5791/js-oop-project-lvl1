class Schema {
  isValid(val) {
    return this.checks.every((check) => this.validator[check](val, this.params));
  }
}

export default Schema;
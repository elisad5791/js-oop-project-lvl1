import Schema from "./schema.js";
import NumberValidator from "../validators/numberValidator.js";

class NumberSchema extends Schema {
  constructor() {
    super();
    this.checks = ['number'];
    this.params = {};
    this.validator = new NumberValidator();
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
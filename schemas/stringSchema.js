import Schema from "./schema.js";
import StringValidator from "../validators/stringValidator.js";

class StringSchema extends Schema {
  constructor() {
    super();
    this.checks = ['string'];
    this.params = {};
    this.validator = new StringValidator();
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

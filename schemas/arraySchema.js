import Schema from "./schema.js";
import ArrayValidator from "../validators/arrayValidator.js";

class ArraySchema extends Schema {
  constructor() {
    super();
    this.checks = ['array'];
    this.params = {};
    this.validator = new ArrayValidator();
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
import Schema from "./schema.js";
import ObjectValidator from "../validators/objectValidator.js";

class ObjectSchema extends Schema {
  constructor() {
    super();
    this.checks = ['object'];
    this.params = {};
    this.validator = new ObjectValidator();
  }

  shape(template) {
    this.checks.push('shape');
    this.params.template = template;
    return this;
  }
}

export default ObjectSchema;
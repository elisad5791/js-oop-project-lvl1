import Schema from './schema.js';

class ObjectSchema extends Schema {
  constructor(validator) {
    super(validator);
    this.checks = ['object'];
    this.params = {};
  }

  shape(template) {
    this.checks.push('shape');
    this.params.template = template;
    return this;
  }
}

export default ObjectSchema;

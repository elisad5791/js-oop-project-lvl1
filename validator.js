import StringSchema from './schemas/stringSchema.js';
import NumberSchema from './schemas/numberSchema.js';
import ArraySchema from './schemas/arraySchema.js';
import ObjectSchema from './schemas/objectSchema.js';
import StringValidator from './validators/stringValidator.js';
import NumberValidator from './validators/numberValidator.js';
import ArrayValidator from './validators/arrayValidator.js';
import ObjectValidator from './validators/objectValidator.js';

class Validator {
  constructor() {
    this.userValidations = {
      string: [],
      number: [],
      array: [],
      object: [],
    };
  }

  string() {
    const validator = new StringValidator();
    const userValidator = this.addUserValidation(validator, 'string');
    return new StringSchema(userValidator);
  }

  number() {
    const validator = new NumberValidator();
    const userValidator = this.addUserValidation(validator, 'number');
    return new NumberSchema(userValidator);
  }

  array() {
    const validator = new ArrayValidator();
    const userValidator = this.addUserValidation(validator, 'array');
    return new ArraySchema(userValidator);
  }

  object() {
    const validator = new ObjectValidator();
    const userValidator = this.addUserValidation(validator, 'object');
    return new ObjectSchema(userValidator);
  }

  addValidator(type, name, fn) {
    this.userValidations[type].push([name, fn]);
  }

  addUserValidation(validator, type) {
    const checks = this.userValidations[type];
    if (checks.length > 0) {
      return checks.reduce((acc, [name, fn]) => {
        acc.constructor[name] = (val, { userParams }) => fn(val, ...userParams);
        return acc;
      }, validator);
    }
    return validator;
  }
}

export default Validator;

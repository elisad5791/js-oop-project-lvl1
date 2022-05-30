import StringSchema from "./schemas/stringSchema.js";
import NumberSchema from "./schemas/numberSchema.js";
import ArraySchema from "./schemas/arraySchema.js";
import ObjectSchema from "./schemas/objectSchema.js";

class Validator { 
  string() {
    return new StringSchema();
  }

  number() {
    return new NumberSchema();
  }

  array() {
    return new ArraySchema();
  }

  object() {
    return new ObjectSchema();
  }
}

export default Validator;
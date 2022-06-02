class ArrayValidator {
  static array(val) {
    return Array.isArray(val) || val === null || val === undefined;
  }

  static required(val) {
    return Array.isArray(val);
  }

  static sizeof(val, { size }) {
    return val.length === size;
  }
}

export default ArrayValidator;

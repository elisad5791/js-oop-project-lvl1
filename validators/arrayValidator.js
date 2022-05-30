class ArrayValidator {
  array(val) {
    return Array.isArray(val) || val === null || val === undefined;
  }

  required(val) {
    return Array.isArray(val);
  }

  sizeof(val, { size }) {
    return val.length === size;
  }
}

export default ArrayValidator;
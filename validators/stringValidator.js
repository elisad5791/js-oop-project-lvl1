class StringValidator {
  string(val) {
    return typeof val === 'string' || val === null || val === undefined;
  }

  required(val) {
    return typeof val === 'string' && val.length > 0;
  }

  minLength(val, { minLength }) {
    return val.length >= minLength;
  }

  contains(val, { str }) {
    return val.includes(str);
  }
}

export default StringValidator;

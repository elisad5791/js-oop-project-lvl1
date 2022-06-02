class StringValidator {
  static string(val) {
    return typeof val === 'string' || val === null || val === undefined;
  }

  static required(val) {
    return typeof val === 'string' && val.length > 0;
  }

  static minLength(val, { minLength }) {
    return val.length >= minLength;
  }

  static contains(val, { str }) {
    return val.includes(str);
  }
}

export default StringValidator;

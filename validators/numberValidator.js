class NumberValidator {
  static number(val) {
    return typeof val === 'number' || val === null || val === undefined;
  }

  static required(val) {
    return typeof val === 'number' && !Number.isNaN(val);
  }

  static positive(val) {
    return val > 0 || val === null;
  }

  static range(val, { range }) {
    return val >= range[0] && val <= range[1];
  }
}

export default NumberValidator;

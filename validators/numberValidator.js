class NumberValidator {
  number(val) {
    return typeof val === 'number' || val === null || val === undefined;
  }

  required(val) {
    return typeof val === 'number' && !Number.isNaN(val);
  }

  positive(val) {
    return  val > 0 || val === null;
  }

  range(val, { range }) {
    return val >= range[0] && val <= range[1];
  }
}

export default NumberValidator;
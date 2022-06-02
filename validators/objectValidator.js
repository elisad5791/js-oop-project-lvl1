class ObjectValidator {
  static object(val) {
    return typeof val === 'object' || val === undefined;
  }

  static shape(val, params) {
    const { template } = params;
    const keys = Object.keys(template);
    return keys.every((key) => template[key].isValid(val[key]));
  }
}

export default ObjectValidator;

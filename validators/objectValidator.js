class ObjectValidator {
  object(val) {
    return typeof val === 'object' || val === undefined;
  }

  shape(val, params) {
    const { template } = params;
    const keys = Object.keys(template);
    return keys.every((key) => template[key].isValid(val[key]));
  }
}

export default ObjectValidator;
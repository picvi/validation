function validateField(object, key, schemeField) {
  const errorList = [];

  const userKeyValue = object[key];

  schemeField.forEach((field) => {
    const args = [userKeyValue, ...field.validator.param];

    if (!field.validator.rule.apply(null, args)) {
      errorList.push({
        key,
        message: field.validationMessage,
      });
    }
  });

  return errorList;
}

export function validateObject(object, scheme) {
  const errorList = [];

  Object.keys(scheme).forEach((key) => {
    errorList.push(...validateField(object, key, scheme[key]));
  });

  return errorList;
}

import { validateField } from './validateField.js';

export function validateObject(object, scheme) {
  const errorList = [];

  Object.keys(scheme).forEach((key) => {
    errorList.push(...validateField(object, key, scheme[key]));
  });

  return errorList;
}

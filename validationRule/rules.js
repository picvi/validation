function checkType(value, requiredType) {
  // eslint-disable-next-line valid-typeof
  return typeof value === requiredType;
}

function checkIfEmpty(value) {
  return value.length > 0;
}

function checkStringRange(value) {
  return value.length > 3 && value.length < 10;
}

export {
  checkType, checkIfEmpty, checkStringRange,
};

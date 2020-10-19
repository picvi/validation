export function keysValidation(object, scheme) {
  const objKeys = Object.keys(object);
  const schemeKeys = Object.keys(scheme);
  const totalKeys = objKeys.concat(schemeKeys);
  const missingKeys = [];

  totalKeys.filter((key) => {
    if (!objKeys.includes(key) || !schemeKeys.includes(key)) {
      missingKeys.push(key);
    }
  });
  return missingKeys;
}

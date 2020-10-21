/* eslint-disable array-callback-return */
function checkExtraKeys(object, scheme) {
  const objKeys = Object.keys(object);
  const schemeKeys = Object.keys(scheme);
  const totalKeys = objKeys.concat(schemeKeys);
  const missingKeys = [];

  totalKeys.filter((key) => {
    if (objKeys.includes(key) && !schemeKeys.includes(key)) {
      missingKeys.push(key);
    }
  });
  return missingKeys;
}

function checkLackOfKeys(object, scheme) {
  const objKeys = Object.keys(object);
  const schemeKeys = Object.keys(scheme);
  const totalKeys = objKeys.concat(schemeKeys);
  const missingKeys = [];

  totalKeys.filter((key) => {
    if (!objKeys.includes(key) && schemeKeys.includes(key)) {
      missingKeys.push(key);
    }
  });
  return missingKeys;
}

export {checkExtraKeys, checkLackOfKeys}
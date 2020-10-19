/* eslint-disable no-console */

import { errorsDisplay } from './validation/errorsDisplay.js';
import { validateObject } from './validation/validateObject.js';
import { user, userScheme } from './Scheme/userScheme.js';
import { keysValidation } from './validation/keysValidation.js';

const results = validateObject(user, userScheme);
const keysResult = keysValidation(user, userScheme);

if (keysResult.length !== 0) {
  console.log('Keys are not equal!');
} else {
  console.log('Keys are equal!');
}

if (results.length !== 0) {
  errorsDisplay(results, user);
} else {
  console.log('It is alright');
}

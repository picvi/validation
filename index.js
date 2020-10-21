/* eslint-disable no-console */

import { errorsDisplay } from './validation/errorsDisplay.js';
import { validateObject } from './validation/validateObject.js';
import { user, userScheme } from './Scheme/userScheme.js';
import { checkExtraKeys, checkLackOfKeys } from './validation/keysValidation.js';

const results = validateObject(user, userScheme);
const extraKeys = checkExtraKeys(user, userScheme);
const lackOfKeys = checkLackOfKeys(user, userScheme);

if (extraKeys.length !== 0) {
  console.log('You have too many questions');
}

if (lackOfKeys.length !== 0) {
  console.log('Not enough questions');
}

if (results.length !== 0) {
  errorsDisplay(results, user);
} else {
  console.log('It is alright');
}

/* eslint-disable no-console */

import { errorsDisplay } from './validation/errorsDisplay.js';
import { validateObject } from './validation/validateObject.js';
import { user, userScheme } from './Scheme/userScheme.js';

const result = validateObject(user, userScheme);

if (result.length !== 0) {
  errorsDisplay(result, user);
} else {
  console.log('It is alright');
}

if (result >= 3) {
  console.log('fd');
}

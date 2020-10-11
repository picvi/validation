import * as rule from '../validationRule/rules.js';

const userScheme = {
  firstName: [
    {
      validator: {
        param: ['string'],
        rule: rule.checkType,
      },
      validationMessage: 'First Name is not a string',
    },
    {
      validator: {
        param: [],
        rule: rule.checkIfEmpty,
      },
      validationMessage: 'First Name should not be empty',
    },
    {
      validator: {
        param: [],
        rule: rule.checkStringRange,
      },
      validationMessage: 'First Name is not in a right range',
    },
  ],
  lastName: [
    {
      validator: {
        param: ['string'],
        rule: rule.checkType,
      },
      validationMessage: 'Last Name is not a string',
    },
    {
      validator: {
        param: [],
        rule: rule.checkIfEmpty,
      },
      validationMessage: 'Last Name should not be empty',
    },
    {
      validator: {
        param: [],
        rule: rule.checkStringRange,
      },
      validationMessage: 'Last Name is not in a right range',
    },
  ],
  age: [
    {
      validator: {
        param: ['number'],
        rule: rule.checkType,
      },
      validationMessage: 'Age is not a number',
    }],
  phone: [
    {
      validator: {
        param: ['string'],
        rule: rule.checkType,
      },
      validationMessage: 'Phone is not a string',
    }],
};

const user = {
  firstName: '',
  lastName: 'Sm',
  age: 45,
  phone: '124445789',
};

export { userScheme, user };

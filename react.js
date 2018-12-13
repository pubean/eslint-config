const rules = require('./rules/common');
const rulesReact = require('./rules/react');

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:compat/recommended'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    es6: true,
    serviceworker: true,
  },
  rules: {
    ...rules,
    ...rulesReact,
  },
};
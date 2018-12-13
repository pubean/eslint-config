const rules = require('./rules/base');

module.exports = {
  extends: ['airbnb-base', 'prettier', 'plugin:compat/recommended'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    serviceworker: true,
  },
  rules,
};

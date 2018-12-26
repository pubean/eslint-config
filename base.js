const rules = require('./rules/base');
const rulesWeb = require('./rules/web');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:promise/recommended',
    'plugin:compat/recommended',
    'plugin:jest/recommended',
    'plugin:security/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    serviceworker: true,
  },
  rules: { ...rules, ...rulesWeb },
  plugins: ['promise', 'jest', 'security'],
};

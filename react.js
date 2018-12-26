const rules = require('./rules/base');
const rulesWeb = require('./rules/web');
const rulesReact = require('./rules/react');

module.exports = {
  parser: 'babel-eslint',
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
  rules: { ...rules, ...rulesWeb, ...rulesReact },
};

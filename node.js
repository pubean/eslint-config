const rules = require('./rules/base');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:node/recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
  },
  rules: { ...rules },
  plugins: ['promise', 'security'],
};

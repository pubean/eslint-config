const rules = require('./rules/base');
const rulesWxapp = require('./rules/wxapp');

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
  globals: {
    wx: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    getApp: true,
    getCurrentPages: true,
  },
  rules: { ...rules, ...rulesWxapp },
};

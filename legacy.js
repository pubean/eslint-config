const rules = require('./rules/base');
const rulesWeb = require('./rules/web');

module.exports = {
  extends: ['prettier', 'plugin:compat/recommended'],
  env: { browser: true },
  rules: { ...rules, ...rulesWeb },
};

const rules = require('./rules/base');

module.exports = {
  extends: ['prettier', 'plugin:compat/recommended'],
  env: { browser: true },
  rules,
};

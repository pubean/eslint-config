var browserGlobals = require('confusing-browser-globals');

module.exports = {
  'no-restricted-globals': ['error', ...browserGlobals],
};

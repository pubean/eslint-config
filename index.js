module.exports = {
  extends: [
    'airbnb',
    'plugin:promise/recommended',
    'prettier',
    'prettier/react',
    'plugin:compat/recommended',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    serviceworker: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
  },
  settings: {
    polyfills: ['fetch', 'promises', 'url', 'requestanimationframe'],
  },
};

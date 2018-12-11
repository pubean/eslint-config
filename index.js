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

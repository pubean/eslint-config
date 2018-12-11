module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:promise/recommended',
    'plugin:compat/recommended',
    'plugin:jest/recommended',
    'plugin:node/recommended',
    'plugin:security/recommended',
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
  plugins: ['html', 'markdown', 'graphql', 'security'],
  settings: {
    'html/html-extensions': ['.html', '.ejs'],
    polyfills: ['fetch', 'promises', 'url', 'requestanimationframe'],
  },
};

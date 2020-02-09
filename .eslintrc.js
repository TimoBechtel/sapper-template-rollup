module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['svelte3'],
  extends: ['eslint:recommended', 'plugin:cypress/recommended'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    // ignore scss
    'svelte3/ignore-styles': attributes =>
      (attributes.lang && attributes.lang === 'scss') ||
      (attributes.type && attributes.type === 'text/scss'),
  },
};

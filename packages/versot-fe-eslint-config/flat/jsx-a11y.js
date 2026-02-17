const jsxAlly = require('eslint-plugin-jsx-a11y');
const jsxAllyRules = require('../rules/jsx-a11y');
const baseConfig = require('./index');

module.exports = [
  ...baseConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'jsx-a11y': jsxAlly,
    },
    rules: {
      ...jsxAllyRules.rules,
    },
  },
];

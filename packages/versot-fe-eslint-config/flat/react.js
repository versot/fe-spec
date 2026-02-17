const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRules = require('../rules/react');
const baseConfig = require('./index');

module.exports = [
  ...baseConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: react,
      'react-hooks': reactHooks,
    },
    settings: {
      ...reactRules.settings,
    },
    rules: {
      ...reactRules.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
    },
  },
];

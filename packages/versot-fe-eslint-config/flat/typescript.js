const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const tsRules = require('../rules/typescript');
const baseConfig = require('./index');

module.exports = [
  ...baseConfig,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ...tsRules.parserOptions,
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    settings: {
      ...tsRules.settings,
    },
    rules: {
      ...tsRules.rules,
      ...tseslint.configs.recommended.rules,
    },
  },
];

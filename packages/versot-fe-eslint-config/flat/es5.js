const js = require('@eslint/js');
const babelParser = require('@babel/eslint-parser');
const globals = require('globals');

const bestPractices = require('../rules/base/best-practices');
const possibleErrors = require('../rules/base/possible-errors');
const style = require('../rules/base/style');
const variables = require('../rules/base/variables');
const es5Rules = require('../rules/es5');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 5,
        sourceType: 'script',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...bestPractices.rules,
      ...possibleErrors.rules,
      ...style.rules,
      ...variables.rules,
      ...es5Rules.rules,
    },
  },
];

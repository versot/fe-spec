const js = require('@eslint/js');
const babelParser = require('@babel/eslint-parser');
const importPlugin = require('eslint-plugin-import');
const globals = require('globals');

const bestPractices = require('../rules/base/best-practices');
const possibleErrors = require('../rules/base/possible-errors');
const style = require('../rules/base/style');
const variables = require('../rules/base/variables');
const es6 = require('../rules/base/es6');
const strict = require('../rules/base/strict');
const imports = require('../rules/imports');

const baseConfig = [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          globalReturn: false,
          impliedStrict: true,
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
    },
    plugins: {
      import: importPlugin,
    },
    settings: imports.settings,
    rules: {
      ...bestPractices.rules,
      ...possibleErrors.rules,
      ...style.rules,
      ...variables.rules,
      ...es6.rules,
      ...strict.rules,
      ...imports.rules,
    },
  },
];

module.exports = baseConfig;

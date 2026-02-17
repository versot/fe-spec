const vue = require('eslint-plugin-vue');
const vueParser = require('vue-eslint-parser');
const vueRules = require('../rules/vue');
const baseConfig = require('./index');

module.exports = [
  ...baseConfig,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      vue: vue,
    },
    rules: {
      ...vue.configs['vue3-essential'].rules,
      ...vueRules.rules,
    },
  },
];

const nodeRules = require('../rules/node');
const baseConfig = require('./index');

const eggNodeRules = require('eslint-config-egg/lib/rules/node');

module.exports = [
  ...baseConfig,
  {
    files: ['**/*.js'],
    rules: {
      ...eggNodeRules.rules,
      ...nodeRules.rules,
    },
  },
];

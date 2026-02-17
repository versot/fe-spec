/**
 * 验证 Flat Config (ESLint 9.x)
 */

const assert = require('assert');
const path = require('path');

describe('Validate Flat configs', () => {
  it('Validate flat/index', () => {
    const config = require('../flat/index.js');
    assert.ok(Array.isArray(config));
    assert.ok(config.length > 0);
  });

  it('Validate flat/react', () => {
    const config = require('../flat/react.js');
    assert.ok(Array.isArray(config));
    assert.ok(config.length > 0);
  });

  it('Validate flat/vue', () => {
    const config = require('../flat/vue.js');
    assert.ok(Array.isArray(config));
    assert.ok(config.length > 0);
  });

  it('Validate flat/typescript', () => {
    const config = require('../flat/typescript.js');
    assert.ok(Array.isArray(config));
    assert.ok(config.length > 0);
  });

  it('Validate flat/node', () => {
    const config = require('../flat/node.js');
    assert.ok(Array.isArray(config));
    assert.ok(config.length > 0);
  });

  it('Validate flat/es5', () => {
    const config = require('../flat/es5.js');
    assert.ok(Array.isArray(config));
    assert.ok(config.length > 0);
  });

  it('Validate flat/jsx-a11y', () => {
    const config = require('../flat/jsx-a11y.js');
    assert.ok(Array.isArray(config));
    assert.ok(config.length > 0);
  });
});

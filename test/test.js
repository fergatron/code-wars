var assert = require('assert');

// katas
var mathFn = require('../src/basic-mathematical-operations.js');

describe('Katas', function() {
  describe('basic mathematical operations', function() {
    it('should execute the intended math operation with the submitted values.', function() {
      assert.equal(3, mathFn.basicOp('+', 1, 2));
      assert.equal(-3, mathFn.basicOp('-', 15, 18));
      assert.equal(25, mathFn.basicOp('*', 5, 5));
      assert.equal(7, mathFn.basicOp('/', 49, 7));
    });
  });
});

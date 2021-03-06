const assert = require('assert');
const mathFn = require('../src/mathFn');

describe('Tests for math function module.', function() {

  describe('basic mathematical operations', function() {
    // https://www.codewars.com/kata/57356c55867b9b7a60000bd7
    it('should execute the a math operation with the submitted values.', function() {
      assert.equal(3, mathFn.basicOp('+', 1, 2));
      assert.equal(-3, mathFn.basicOp('-', 15, 18));
      assert.equal(25, mathFn.basicOp('*', 5, 5));
      assert.equal(7, mathFn.basicOp('/', 49, 7));
    });

    // https://www.codewars.com/kata/55a2d7ebe362935a210000b2
    it('should return the smallest integer.', function() {
      assert.equal(8, mathFn.findSmallestInt([78,56,232,12,8]));
      assert.equal(56, mathFn.findSmallestInt([78,56,232,412,228]));
    });

    // https://www.codewars.com/kata/558fc85d8fd1938afb000014
    it('should return the sum of two smallest integers.', function() {
      assert.equal(13, mathFn.sumOfTwoSmallestIntegers([5, 8, 12, 19, 22]));
      assert.equal(6, mathFn.sumOfTwoSmallestIntegers([15, 28, 4, 2, 43]));
      assert.equal(10, mathFn.sumOfTwoSmallestIntegers([3, 87, 45, 12, 7]));
      assert.equal(24, mathFn.sumOfTwoSmallestIntegers([23, 71, 33, 82, 1]));
      assert.equal(16, mathFn.sumOfTwoSmallestIntegers([52, 76, 14, 12, 4]));
    });
  });
});

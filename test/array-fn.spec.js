const assert = require('assert');
const arrayFn = require('../src/arrayFn');

describe('Tests for array function module.', function() {
    // https://www.codewars.com/kata/523f5d21c841566fde000009
    it('should return a small difference between two arrays.', function() {
        assert.equal(arrayFn.diff([1,2], [1]), [2]);
    });

    it('should return a bigger difference between two array.', function() {
        assert.equal(arrayFn.diff([1,2,2,2,3], [2]), [1,3]);
    });

    it('should return a much bigger difference between two array.', function() {
        assert.equal(arrayFn.diff([1,2,2,2,3], [2,4,19,3,21]), [1,4,19,21]);
    });
});
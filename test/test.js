var assert = require('assert');

// katas
var mathFn = require('../src/math-functions.js');
var paperRockSiccors = require('../src/paper-rock-scissors.js');

describe('Katas', function() {

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
  });

  describe('custom logic operations', function() {
    // https://www.codewars.com/kata/5672a98bdbdd995fad00000f
    it('should determine a winner based on rock-paper-sissors logic.', function() {
      assert.equal('Player 1 won!', paperRockSiccors.play('rock', 'scissors'));
      assert.equal('Player 2 won!', paperRockSiccors.play('scissors', 'rock'));
      assert.equal('Draw!', paperRockSiccors.play('paper', 'paper'));
    });
  });
});

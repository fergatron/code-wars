const assert = require('assert');
const paperRockSiccors = require('../src/paper-rock-scissors');

describe('Tests for paper-rock-scissors module', function() {

  // https://www.codewars.com/kata/5672a98bdbdd995fad00000f
  describe('custom logic operations', function() {
    it('should determine a winner based on rock-paper-sissors logic.', function() {
      assert.equal('Player 1 won!', paperRockSiccors.play('rock', 'scissors'));
      assert.equal('Player 2 won!', paperRockSiccors.play('scissors', 'rock'));
      assert.equal('Draw!', paperRockSiccors.play('paper', 'paper'));
    });
  });
})
let paperRockSiccors = {};

/**
* Play (paper rock scissors)
* https://www.codewars.com/kata/5672a98bdbdd995fad00000f
* @param element 1 (String), element 2 (String)
* @return String
*/
paperRockSiccors.play = function(p1, p2) {
  if (p1 === p2) {
      return "Draw!";
  } else {
      const elements = {
          rock: 'rock',
          paper: 'paper',
          scissors: 'scissors'
      };
      // rock scenarios
      if (p1 === elements.rock) {
          return p2 === elements.paper ? "Player 2 won!" : "Player 1 won!";
      // paper scenarios
      } else if (p1 === elements.paper) {
          return p2 === elements.rock ? "Player 1 won!" : "Player 2 won!";
      // scissor scenarios
      } else {
          return p2 === elements.rock ? "Player 2 won!" : "Player 1 won!";
      }
  }
};

module.exports = paperRockSiccors;

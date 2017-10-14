let mathFn = {};

/**
* basic operation
* https://www.codewars.com/kata/57356c55867b9b7a60000bd7
* @param operation (String), first value (Integer), second value (Integer)
* @return calculated value (Integer)
*/
mathFn.basicOp = function(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

/**
* find the smallest integer
* https://www.codewars.com/kata/55a2d7ebe362935a210000b2
* @param arguments (Array)
* @return result (Intger)
*/
mathFn.findSmallestInt = function(args) {
  return Math.min.apply(null, args);
}

module.exports = mathFn;

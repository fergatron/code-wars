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

/**
* sum two smallest integers
* https://www.codewars.com/kata/558fc85d8fd1938afb000014
* @param arguments (Array)
* @return calculated value (Integer)
*/
mathFn.sumOfTwoSmallestIntegers = function(args) {
  if (Array.isArray(args)) {
    const argsCopy = args.slice();
    const smallValue1 = Math.min.apply(null, argsCopy);

    argsCopy.splice(argsCopy.indexOf(smallValue1),1);

    return smallValue1 + Math.min.apply(null, argsCopy);
  }
  return 0;
}

module.exports = mathFn;

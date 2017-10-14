let mathFn = {};

mathFn.basicOp = function(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

module.exports = mathFn;

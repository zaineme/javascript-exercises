const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(args) {
	return args.reduce((partialSum, currentValue) => partialSum + currentValue, 0);
  
};

const multiply = function(...args) {
  return args.reduce((partialValue, currentValue) => partialValue * currentValue);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

function recurseFactorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * recurseFactorial(num - 1);
  }
}

const factorial = function(number) {
  return recurseFactorial(number);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

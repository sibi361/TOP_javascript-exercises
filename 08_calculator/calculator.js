const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (...args) {
  let sum = 0;
  args.forEach((element) => {
    if (typeof element == "number") sum += element;
    else {
      element.forEach((element) => {
        sum += element;
      });
    }
  });
  return sum;
};

const multiply = function (...args) {
  let product = 1;
  args.forEach((element) => {
    if (typeof element == "number") product *= element;
    else {
      element.forEach((element) => {
        product *= element;
      });
    }
  });
  return product;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  let factorial = 1;
  n += 1;
  while (n-- > 1) factorial *= n;
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

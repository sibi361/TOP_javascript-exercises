function fib(n) {
  if (n == 1 || n == 2) return 1;
  else return fib(n - 1) + fib(n - 2);
}

const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  return fib(n);
};

// Do not edit below this line
module.exports = fibonacci;

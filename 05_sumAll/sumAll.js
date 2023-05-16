const sumAll = function (low, high) {
  let sum = 0;
  if (low < 0 || high < 0) {
    return "ERROR";
  } else if (typeof low != "number" || typeof high != "number") {
    return "ERROR";
  } else if (low > high) {
    let _low = high;
    high = low;
    low = _low;
  }

  for (let i = low; i < high + 1; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

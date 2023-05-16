const repeatString = function (input, count) {
  let output = "";

  if (count == 0) return output;
  else if (count < 0) return "ERROR";

  while (count-- > 0) output += input;

  return output;
};

// Do not edit below this line
module.exports = repeatString;

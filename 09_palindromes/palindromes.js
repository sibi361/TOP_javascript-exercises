const palindromes = function (input) {
  input = input.toLowerCase();
  if (input.includes(",")) input = input.split(",").join("").replace(" ", "");

  input = input.replace(/[^a-z]/g, "");
  return input.split("").toString() == input.split("").reverse().toString();
};

// Do not edit below this line
module.exports = palindromes;

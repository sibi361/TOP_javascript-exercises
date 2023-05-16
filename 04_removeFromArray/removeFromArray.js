const removeFromArray = function (array, ...elements) {
  let newArray = [];
  array.forEach((element) => {
    if (!elements.includes(element)) newArray.push(element);
  });

  return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 1, 4));
// Do not edit below this line
module.exports = removeFromArray;

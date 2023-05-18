const findTheOldest = function (peopleDict) {
  let peopleNew = [];
  peopleDict.forEach((element) => {
    let eleNew = {};
    let age;

    eleNew.name = element.name;
    if (element.yearOfDeath != undefined)
      age = element.yearOfDeath - element.yearOfBirth;
    else age = new Date().getFullYear() - element.yearOfBirth;
    eleNew.age = age;

    peopleNew.push(eleNew);
  });

  let oldest = {};
  peopleNew.forEach((element) => {
    if (oldest.age == undefined) oldest = element;
    else {
      if (element.age > oldest.age) oldest = element;
    }
  });

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

const getTheTitles = function (db) {
  const titles = [];
  db.forEach((element) => {
    titles.push(element.title);
  });
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

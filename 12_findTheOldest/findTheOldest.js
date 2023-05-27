const findTheOldest = function (people) {
    const peopleAge = people.map((person) => {
        let personNew = { name: person.name };

        if (person.yearOfDeath != undefined)
            personNew.age = person.yearOfDeath - person.yearOfBirth;
        else personNew.age = new Date().getFullYear() - person.yearOfBirth;

        return personNew;
    });

    const oldest = peopleAge.reduce((oldest, element) => {
        return element.age > oldest.age ? element : oldest;
    }, peopleAge[0]);

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

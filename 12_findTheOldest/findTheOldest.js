const findTheOldest = function(people) {
  
  let age = 0;
  let tempAge = 0;
  let birthYear = '';
  let deathYear = new Date().getFullYear(); 
  let result = {};
  for (let i in people) {
    if (people[i]['yearOfDeath'] !== undefined) {
      deathYear = people[i]['yearOfDeath'];
    }
    tempAge = deathYear -  people[i]['yearOfBirth'];
    if (tempAge > age) {
      age = tempAge;
      result.name = people[i]['name'];
    }
  }
  return result;
};
  
// Do not edit below this line
module.exports = findTheOldest;

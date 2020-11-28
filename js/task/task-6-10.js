import users from "./users.js";

const getSortedUniqueSkills = (array) =>
  array
    .reduce((acc, { skills }) => [...acc, ...skills], [])
    .filter((skill, ind, array) => array.indexOf(skill) === ind)
    .sort();


console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */

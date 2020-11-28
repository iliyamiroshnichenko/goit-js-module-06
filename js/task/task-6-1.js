import users from './users.js';
// Вариант решения 1

// const getUserNames = array => array.map(function ({name}) {
//   return name;
// });

// Вариант решения 2 стрелка
const getUserNames = (array) =>
  array.map(({name}) => name);


console.log(getUserNames(users));

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */

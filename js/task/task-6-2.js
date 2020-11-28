import users from "./users.js";
// Вариант решения 1

// const getUsersWithEyeColor = (array, color) =>
//   array.filter(function ({ eyeColor }) {
//     if (eyeColor === color) {
//       return eyeColor;
//     }
//   });

// Вариант решения 2 стрелка
const getUsersWithEyeColor = (array, color) =>
  array.filter(({ eyeColor }) => eyeColor === color);

// Вариант решения 3
// const getUsersWithEyeColor = (array, color) =>
//   array.filter(obj => obj.eyeColor === color)

  
  
console.table(getUsersWithEyeColor(users, 'blue'));
/* [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  }
] */

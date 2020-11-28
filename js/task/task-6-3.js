import users from "./users.js";

const getUsersWithGender = (array, gender) =>
  array.filter((obj) => obj.gender === gender).map(({ name }) => name);
  
  // const getUsersWithGender = (array, filteredGender) =>
  //   array.filter(({gender}) => gender === filteredGender).map(({ name }) => name);


console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",  
  "Carey Barr",  
  "Blackburn Dotson"  
] */

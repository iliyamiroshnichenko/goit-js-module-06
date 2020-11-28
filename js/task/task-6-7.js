import users from "./users.js";

// const calculateTotalBalance = (array) => array
//     .reduce(function (accum, {balance}){return accum + balance},0);
const calculateTotalBalance = (array) =>
  array.reduce((accum, {balance}) => accum + balance, 0);


console.log(calculateTotalBalance(users));
// 20916

import users from "./users.js";

const getNamesSortedByFriendsCount = (array) => 
      [...array]
      .sort((prev, next) => prev.friends.length - next.friends.length)
      .map(({ name }) => name);



 console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

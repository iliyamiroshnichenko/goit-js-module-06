/*
* Array.prototype.filter()
* Поэлементно перебирает оригинальный массив
* Возвращает новый массив(ВСЕГДА!)
* Добавляет в возвращаемый массив элементы, которые удовлетворяют условию
*/

const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = numbers.filter(number => number > 15)
console.log(filteredNumbers);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 49, online: true },
];

// Получаем массив всех игроков онлайн 
const onlinePlayers = players.filter(function(player){return player.online})
// const onlinePlayers = players.filter(player => player.online);
// const onlinePlayers = players.filter(({online}) => online);
console.table(onlinePlayers);

// Получаем массив всех оффлайн игроков
// const offlinePlayers = players.filter(function (player) { return !player.online })
// const offlinePlayers = players.filter(player => !player.online);
const offlinePlayers = players.filter(({online}) => !online);
console.table(offlinePlayers);

// Получаем список хардкорных игроков с временем больше 250 поинтов
const hardcorePlayers = players.filter(({ timePlayed }) => timePlayed > 250);
console.table(hardcorePlayers);
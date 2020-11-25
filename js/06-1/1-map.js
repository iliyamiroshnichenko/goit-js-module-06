/*
* Array.prototype.map()
* Поэлементно перебирает оригинальный массив
* Возвращает новый массив такой же длины
*/

const numbers = [5, 10, 15, 20, 25];

const mappedNumbers = numbers.map(function (element) {
  // console.log(element);
  // console.log(index);
  // console.log(array);
  return element * 2;
});
console.log(mappedNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 49, online: true }
]

//Получаем массив всех имен игроков
const playerNames = players.map(function (player) {
  return player.name;
});
console.log(playerNames);

// Увеличиваем количество поинтов каждого игрока
const updatedPlayers = players.map(function (player) {
  return {...player, points: player.points + player.points * 0.1}
});
console.table(updatedPlayers);

// Увеличиваем количество часов игрока по id
const playerIdToUpdate = "player-3";
const updated2Players = players.map(function (player) {
  if (player.id === playerIdToUpdate) {
    return { ...player, timePlayed: player.timePlayed + 50};
  }
  return player;
});

console.table(updated2Players);


/*
* map своими руками
*/
// создает и возвращает новый массив
// перебирает оригинальный массив
// вызывает колюек для каждого элемента и кидает туда аргументы
// записывает результат вызова функции в новый массив

const map = function (array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1){
    const result = callback(array[i], i, array);
    newArray.push(result);
  }
  return newArray;
 };

const doubleNumbers = map(numbers, function (number, index, array) {
  // console.log(number);
  // console.log(index);
  // console.log(array);
  return number * 2;
})
console.log(doubleNumbers);

/*
* Пишем руками на Array.prototype.map
*/
Array.prototype.map = function (cb) {
  const newArray = [];
  console.log('Привет из Array.prototype.map: ', this);
  //  for (let i = 0; i < this.length; i += 1) {
  //    const result = callback(this[i], i, this);
  //    newArray.push(result);
  //  }
  return newArray;
 };

const doubled = numbers.map(function (number) {
  return number * 2;
})
console.log(doubled);
/*
 * Array.prototype.sort()
 * Сортирует и ИЗМЕНЯЕТ оригинальный массив
 */

const numbers = [1, 9, 6, 2, 3];
numbers.sort((prev, next) => next - prev);
console.log(numbers);

const letters = ['b', 'B', 'a', 'A'];
letters.sort();
console.log(letters);

// Как сделать копию массива, чтобы не сортировать оригинальный
const copy1 = numbers.slice();
console.log(copy1);
const copy2 = [...numbers];
console.log(copy2);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 49, online: true },
];

// players.sort(
//   (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
// );
// // players.sort(
// //   (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
// // );
// console.table(players);

const sortedByTopPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);
console.table(sortedByTopPlayers);
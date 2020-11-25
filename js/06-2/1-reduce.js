/*
 * Array.prototype.reduce()
 * Поэлементно перебирает оригинальный массив
 * Возвращает что угодно!
 * Заменяет все на свете, но использовать нужно с умом!
 */
const numbers = [5, 10, 15, 20, 25];
const total = numbers.reduce(function (accum, number) {
  return accum + number;
}, 0);
console.log(total);

// Считаем общую зарплату
const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce((acc, value) => acc + value);
console.log(totalSalary);

// Считаем общее количество часов
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 49, online: true },
];

const totalTimePlayed = players.reduce(
  (acc, { timePlayed }) => acc + timePlayed,
  0
);
console.log(totalTimePlayed);

// Считаем общую сумму товаров корзины
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity , 0)
console.log(totalAmount);

// Собираем все теги из твитов
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
const allTags = tweets.reduce((acc, {tags}) => {
    acc.push(...tags);
    return acc;
}, [])
console.log(allTags);


// Ведем статистику тегов
// const tagStats = allTags.reduce((acc, tag) => {
//     console.log(tag);
    // if (acc.hasOwnProperty(tag)) {
    //     console.log('Такое свойство есть, увеличиваем значение');
    //     acc[tag] += 1;
    //     return acc;
    // };
    // console.log("Такого свойства нет, добавлям на объект");
    // acc[tag] = 1;
    // return acc;
// Грязная версия, мутирует аргумент, который придет в acc
//     acc[tag] = acc.hasOwnProperty(tag) ? (acc[tag] + 1) : 1;
//     return acc;
// }, {});

// Чистая версия, каждый раз создает новый объект
const tagStats = allTags.reduce((acc, tag) => {
  return {...acc, [tag]: acc.hasOwnProperty(tag) ? (acc[tag] + 1) : 1}
 }, {});

console.log(tagStats);


// Reduce своими руками
// Array.prototype.reduce = function (cb, initialValue = this[0]) {
//     let accum = initialValue;
//     for (let i = 0; i < this.length; i += 1){
//         accum = cb(accum, this[i], i, this);
//     }
//     return accum;
// }
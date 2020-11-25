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
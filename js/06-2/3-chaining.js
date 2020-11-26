// Цепочки вызовов - chaining

const numbers = [1, 5, 2, 4, 3];

const result = numbers
  .filter((num) => num > 2)
  .map((num) => num * 3)
  .sort((a, b) => a - b);

console.log(result);

// Сортируем тех, кто онлайн, по рангу

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, rank: 800, online: true },
  { id: "player-2", name: "Poly", timePlayed: 470, rank: 600, online: false },
  { id: "player-3", name: "Kiwi", timePlayed: 230, rank: 100, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, rank: 400, online: true },
  { id: "player-5", name: "Chelsy", timePlayed: 80, rank: 150, online: false },
];

const onlineAndSorted = players
  .filter(({ online }) => online)
  .sort((prev, next) => prev.rank - next.rank);

console.table(onlineAndSorted);

// Chaining в методах объекта как jQuery

const element = {
  class: "",
  hovered: false,
  changeClass(clas) {
    this.class = clas;
    return this;
  },
  toggleHovered() {
    this.hovered = !this.hovered;
    return this;
  },
};
element.changeClass("open").toggleHovered();
console.log(element);


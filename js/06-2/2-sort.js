/*
* Повторяем функции-конструкторы. Пишем класс Hero
* Статические свойства и методЫ
*/
const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
}

Hero.descrirtion = 'This is a Hero base class';
console.log(Hero.descrirtion);
Hero.showStats = function (hero) {
  console.log(hero);
}

Hero.prototype.changeName = function (name) {
  this.name = name;
}

const mango = new Hero('Mango', 1000);
Hero.showStats(mango);

mango.changeName("Alyosha");
console.log(mango);
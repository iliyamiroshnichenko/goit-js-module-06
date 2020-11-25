/*
* Классы. Переписываем Hero с новым синтаксисом
*/

class Hero {
  static description = "This is a Hero base class";

  static showStats(hero) {
    console.log(hero);
  }

  constructor(name, xp) {
    this._name = name;
    this.xp = xp;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // changeName(name) {
  //   this.name = name;
  // }

  // getName() {
  //   return this.name;
  // }

  gainXp(amount) {
    console.log(`${this._name} gained ${amount} experience`);
    this.xp += amount;
  }
}
console.dir(Hero);

const mango = new Hero("Mango", 1000);
console.log(mango.name);
mango.name = "essketit"
console.log(mango.name);
// mango.gainXp(2000);
// console.log(mango);

class Hero {
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

  gainXp(amount) {
    console.log(`${this._name} gained ${amount} experience`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor(name, xp, weapon) {
    super(name, xp);
    this.weapon = weapon;
  }

  attack() {
    console.log(`${this._name} attacks with ${this.weapon}`);
  }
}

const mango = new Hero("Mango", 1000);
console.log(mango);
const iliya = new Warrior("iliya", "150", "Sword");
console.log(iliya);
iliya.attack();
iliya.gainXp(300);
console.log(Warrior.prototype.__proto__ === Hero.prototype);

class Palladin extends Warrior {
  constructor(name, xp, weapon, spell) {
    super(name, xp, weapon);
    this.spell = spell;
    }
    
    cast() {
        console.log(`${this.name} casts ${this.spell}`);
    }
}
const misha = new Palladin("Misha", 800, "knife", "cleanse");
console.log(misha);
misha.attack();
misha.gainXp(120);
misha.cast();

const User = function (name, sales) {
  this.name = name;
  this.sales = sales;
};

User.prototype.sell = function () {
  this.sales += 1;
}

User.prototype.changeName = function (name) {
  this.name = name;
}

const vasya = new User('Vasya', 50);
console.log(vasya);
vasya.sell();
console.log(vasya.sales);

console.log(vasya.__proto__ === User.prototype)

const petya = new User("Petya", 100);
petya.sell();
console.log(petya.sales);

petya.changeName("Petro");
console.log(petya);
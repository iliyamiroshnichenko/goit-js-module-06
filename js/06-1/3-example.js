const User = function (name, sales) {
  this.name = name;
  this.sales = sales;
};

User.prototype.sell = function () {
  this.sales += 1;
};

User.prototype.changeName = function (name) {
  this.name = name;
};

const vasya = new User("Vasya", 50);
console.log(vasya);

document
  .querySelector(".js-add-method")
    .addEventListener("click", function () {
        User.prototype.newMethod = function () {
            console.log(this);
            console.log('Hello!');
        }
       vasya.newMethod();
  });

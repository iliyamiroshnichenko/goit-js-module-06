// const add = function (a, b) {
//     return a + b;
// }

const add = (a, b) => a + b;
console.log(add(2, 3));

const logMessage = (message) => console.log(message);
logMessage("Выводим сообщение");

const greet = () => console.log("Shalom!");
greet();

const add2 = (...args) => args.reduce((sum, item) => sum + item, 0);
console.log(add2(2, 3, 4, 5, 6, 7, 100));

// Контекст внутри стрелки определяется местом ее объявления, а не вызова,
// и ссылается на контекст родительской функции

// const showThis = () => {
//   console.log("this is showThis: ", this);
// };
// showThis();

// const user = { name: "Mango" };
// user.showContext = showThis;
// user.showContext();

const user2 = {
  fullName: "Mango",
  showName() {
    console.log("this: ", this);
    console.log("this.fullName: ", this.fullName);

    const inner = () => {
      console.log("this in inner: ", this);
    };
    inner();
  },
};

user2.showName();

// Стрелки как методы объекта
// СТРЕЛКИ НЕ БЫВАЮТ МЕТОДАМИ ОБЪЕКТА

const user3 = {
  fullName: "Mango",
  showName() {
    console.log("this: ", this);
    console.log("this.fullName: ", this.fullName);
  },
};

user3.showName();

// еще раз стрелка как метод объекта

const objA = {
    x: 5,
    showX() {
        console.log("this в objA.showX: ", this);
        console.log(this.x);
        const objB = {
            y: 10,
            showThis: () => {
                console.log('this в objB.showThis: ', this);
            }
        };
        objB.showThis();
    },
};
objA.showX();
// const Storage = function (items = []) {
//   this.items = items;
// };

// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (item) {
//   this.items.push(item);
// };
// Storage.prototype.removeItem = function (item) {
//   for (let i = 0; i < this.items.length; i += 1) {
//     if (this.items[i] === item) {
//       this.items.splice(i, 1);
//       break;
//     }
//   }
// };

  class Storage {
  	constructor(items){
    	this.items = items;
    }
    getItems(){
    	return this.items;
    }
    addItem(item){
    	this.items.push(item);
    }
    removeItem(item){
    	for (let i = 0; i < this.items.length; i += 1){
        	if(this.items[i] === item){
            	this.items.splice(i, 1);
              	break;
            }
        }
    }
  }

console.log(typeof Storage);
// 'function'

const goods = ["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор"];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem("Дроид");
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem("Пролонгер");
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

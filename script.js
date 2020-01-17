'use strict';

/*var LeftBorderWidth = 1;
let second = 2;
const pi = 3.14;

console.log(4/0);

let persone = {
    name: "Diana",
    age: 40,
    isMarried: true
};
console.log(persone.isMarried);

let arr = ['Hi','Hello','By'];

console.log(arr[0]);*/

//alert("Hi Yaroslav");

/*let answer = confirm("Are you here?")

console.log(answer);*/

//let answer = prompt("Have you 18 ?", "Yes")

//console.log(answer);

/*let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(15%2);
console.log("2" == 2);//Сравнивает по значению и выдает true
console.log("2" === 2);//Сравнивает по значению и по типу данн-х и выдает false

let inChecked = true,
    inClosed = false;

console.log(inChecked && inClosed);

console.log(inChecked || inClosed);

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);
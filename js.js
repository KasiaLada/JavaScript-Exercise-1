// const favColor = 'red';
// const meal = 'schabowy';
// const favDrink = 'pepsi';
// const amount = 123;
// const name = 'Kasia';
// const age = 40;

// console.log(`Cześć, jestem ${name} i mam ${age} lat`);
// x = x * y;
// x = x / y;
// x = x % y;
// ----------------
// const score = 15 % 2;
// console.log(score);
// // ______________________
// let num1 = 8;
// num1++;
// num1++;
// console.log(num1);
// // _____________________________

// let x = 5;
// let y = 10;
// x *= y;
// console.log(x);
// x /= y;
// console.log(x);
// -----------------

// function AddNumbers(x, y) {
// 	console.log(x + y);
// }
// AddNumbers(5, 3);

// function subtraction(x, y) {
// 	console.log(x - y);
// }
// subtraction(10, 8);

// function multiplication(x, y) {
// 	console.log(x * y);
// }
// multiplication(6, 8);

// function division(x, y) {
// 	console.log(x / y);
// }
// division(80, 2);

// function showName(name, age) {
// 	console.log(`Podane imię to ${name}, wiek ${age}`);
// }
// showName("Asia", 36);
// -------------------------
// Exercise 1
const numbers = [1, 2, 3, 4, 5, 6,3];
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}


function math(arg1, arg2, arg3) {
	console.log(arg1 + arg2 * arg3);
}
math(1, 2, 3);

if (numbers.length > 5) {
	console.log(true);
} else {
	console.log(false);
}




for (let i = 0; i < numbers.length; i++) {
	console.log(`Tablica z cyframi ma ${numbers.length} elementów`);
}
// ___________________
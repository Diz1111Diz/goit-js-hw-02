'use strict'

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Ввидите число');
  let convertInput = Number(input);
  if (input !== null) {
    numbers.push(convertInput);
  }
} while (input !== null);

if (numbers.length) {

  for (const variable of numbers) {

    total += variable;
  }
}

console.log(`Общая сумма чисел равна ${total}`);
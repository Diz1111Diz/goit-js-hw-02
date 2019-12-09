'use strict'

const checkForSpam = function(message) {
  const word = message.toLowerCase();
   
  console.log(word);

  return word.includes('spam') || word.includes('sale');
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
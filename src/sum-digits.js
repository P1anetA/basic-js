const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
 let input = Array.from(String(n), Number); 
 for (let i = input.length; i > 0; i--) {
   input = Array.from(String(input.reduce((partialSum, a) => partialSum + a, 0)), Number); 
 }
 return Number(input);
}
module.exports = {
  getSumOfDigits
};

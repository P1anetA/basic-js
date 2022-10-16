const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = [];
  let input = n.toString().split('');
  for (let i = 0; i < input.length; i++) {
    let newInput = input.filter((el, index) => index != i);
    result.push(newInput.join(''));
  }
  return Math.max(...result);
}
module.exports = {
  deleteDigit
};

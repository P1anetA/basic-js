const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let filter = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 1) {
      filter.push(arr[i]);
    }
  }
  filter = filter.sort((a,b)=>a-b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result.push(arr[i]);
    } else {
      result.push(filter[0]);
      filter = filter.slice(1);
    }
  }
  return result;
}
// npm run test
module.exports = {
  sortByHeight
};

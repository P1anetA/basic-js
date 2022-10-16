const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let objects = {};
  let temp = domains.map(el => el.toString().split('.').reverse());
  let oldresult = temp.map(el => el.map(insideel => '.' + insideel));
  let result = oldresult.map(el => reorg(el));
  function reorg(input) {
      let arr = [input[0]];
      for (let i = 1; i < input.length; i++) {
      let res = [arr[i-1] + input[i]];
       arr.push(res.join(''));
      }
      return arr;
  };
    for (let i = 0; i < result.length; i++){
      for (let j = 0; j < result[i].length; j++){
      let objects_key = Object.keys(objects);
      let index = objects_key.indexOf(result[i][j]);
      if (index == -1) {
        objects[result[i][j]] = 1;
      } else {
        objects[objects_key[index]]++;
      }
     }}
  return objects;
}


// npm run test

module.exports = {
  getDNSStats
};

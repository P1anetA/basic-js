const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes = 0,
    separator = '+',
    addition = '',
    additionRepeatTimes = 0,
    additionSeparator = '|'
} = options;
  let result = [];
  if (additionRepeatTimes !== 0) {
    for (let j = 0; j < additionRepeatTimes; j++) {
      str += additionSeparator;
      str += addition;
    }
    result.push(str);
  }
  if (repeatTimes !== 0) {
    for (let i = 0; i < repeatTimes; i++) {
    result.push(str);}
  }
  return result.join(separator);
}
console.log(repeater('j445', {repeatTimes : 2,
  separator : '+',
  addition : 'Add',
  additionRepeatTimes : 2,
  additionSeparator : '**'}));

module.exports = {
  repeater
};

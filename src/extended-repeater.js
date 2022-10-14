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
    repeatTimes ,
    separator = '+',
    addition = '',
    additionRepeatTimes,
    additionSeparator
} = options;
  let result = [];
  if (addition && !additionRepeatTimes) {
    str += addition;
  }
  else if (additionRepeatTimes >= 1) {
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (!additionSeparator) {
        str += addition;
      } else {
        if (j = 0) {
          str += addition;
        } else {
          str += additionSeparator;
          str += addition;
        }
      }
    }
  }
  if (repeatTimes) {
    for (let i = 0; i < repeatTimes; i++) {
    result.push(str);}
    return result.join(separator)
  } else {
    result.push(str);
    return result.join(separator)
  }
}
// console.log(repeater('j445', {repeatTimes : 2,
//   separator : '+',
//   addition : 'Add',
//   additionRepeatTimes : 2,
//   additionSeparator : '**'}));

module.exports = {
  repeater
};

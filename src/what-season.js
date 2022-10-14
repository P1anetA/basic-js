const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date){
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== "[object Date]"){
    throw Error ('Invalid date!');
  }
  if (Object.keys(date).length > 0) {
    throw Error('Invalid date!');
  }
  if (!date.getMonth){
    return false;
  }
  if (date.getMonth() < 2) {
    return  date = 'winter';
  }
  if (date.getMonth() < 5) {
    return date =  'spring';
  }
  if (date.getMonth() < 8) {
    return date = 'summer';
  }
  if (date.getMonth() < 11) {
    return date = /autumn|fall/;
  }
  if (date.getMonth() <= 11) {
    return date = 'winter';
  }
}

module.exports = {
  getSeason
};

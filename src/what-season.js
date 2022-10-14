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
function getSeason(/* date */) {
  if (Object.prototype.toString.call(date) !== "[object Date]" || date.getMonth() < 12){
    return date = 'Unable to determine the time of year!';
  }
  if (date.getMonth() < 3) {
    return date = 'winter';
  }
  if (date.getMonth() < 6) {
    return date = 'spring';
  }
  if (date.getMonth() < 9) {
    return date = 'summer';
  }
  if (date.getMonth() < 12) {
    return date = 'autumn';
  }
  if (date.getMonth() == 12) {
    return date = 'winter';
  }
}

module.exports = {
  getSeason
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disks, speed) {
  let turns = count(disks);
  let seconds = Math.floor((3600 / speed) * turns);
  return result = ` turns: ${turns}, seconds: ${seconds} `;
}

function count(n) {
  if (n == 0) return 0;
  let turns = 2 * count(n - 1) + 1;
  return turns;
}

module.exports = {
  calculateHanoi
};

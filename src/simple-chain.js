const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result : [],
  getLength() {
    // length = Number(this.result.length);
    // console.log(length);
    return this.result.length;
  },
  addLink(n = '') {
    this.result.push(n);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.result.length) {
      this.result = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.result.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.result = this.result.reverse();
    return this;
  },
  finishChain() {
    let final = this.result.map(el => `( ${el} )`).join('~~');
    this.result.length = 0;
    return final;
  }
};
// console.log(chainMaker.addLink().addLink(2).addLink(3).removeLink().reverseChain().finishChain())
// npm run test
module.exports = {
  chainMaker
};

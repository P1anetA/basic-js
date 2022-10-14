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
  addLink(n) {
    if (!n || n.length === 0) {
      this.result.push('( )');
      return this;
    }
    this.result.push(`( ${n} )`);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position % 1 != 0) {
      throw Error(`You can't remove incorrect link!`);
    }
    this.result = this.result.filter(r => r !== this.result[position - 1])
    return this;
  },
  reverseChain() {
    this.result = this.result.reverse()
    return this;
  },
  finishChain() {
    return this.result.join('~~');
  }
};
console.log(chainMaker.addLink().addLink(2).addLink(3).removeLink().reverseChain().finishChain())

module.exports = {
  chainMaker
};

const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value = (value === undefined) ? '( )' : `( ${value} )`;
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof (position) === 'number' && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error;
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let output = this.chain.join('~~');
    this.chain = [];
    return output;
  }
};

module.exports = chainMaker;

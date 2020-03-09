

const chainMaker = {

  chain: [],

  getLength() {

    return this.chain.length;
  },

  addLink(value) {

    if(value === undefined) {

      this.chain.push( '( )' );

    } else {

      this.chain.push(`${value}`);

    }

    return this;
  },

  removeLink(position) {

    if(typeof (position) === "number" && position > 0 && position <= this.chain.length) {

      this.chain.splice(position - 1, 1);
      return this;
    }

    this.chain = [];
    throw new Error();
  },

  reverseChain() {

    this.chain.reverse();
    return this;
  },

  finishChain() {
    
    let myChain = this.chain.join(" )~~( ");
    this.chain = [];
    return '( ' + myChain + ' )';
  }
};

module.exports = chainMaker;

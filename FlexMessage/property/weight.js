
const { mix } = require('mics');

module.exports = mix(
  superclass => class Base extends superclass {
    /**
     *
     * @param {*} weight
     */
    setWeight(weight) {
      if (weight) this.weight = weight;
      return this;
    }

    setWeightBold() {
      this.weight = 'bold';
      return this;
    }
  },
);

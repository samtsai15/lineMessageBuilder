// TODO: different components have different limit
const { mix } = require('mics');

const sizeLimit = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'full'];


module.exports = mix(
  superclass => class Size extends superclass {
    /**
     *
     * @param {*} size
     */
    setSize(size) {
      if (!size || sizeLimit.includes(size) === false) {
        throw Error('Wrong Size');
      }
      this.size = size;
      return this;
    }
    // TODO: need create others valueFunction()
  },
);

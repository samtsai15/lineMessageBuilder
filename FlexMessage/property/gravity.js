const { mix } = require('mics');

const gravityLimit = ['top', 'bottom', 'center'];

module.exports = mix(
  superclass => class Gravity extends superclass {
    /**
     *
     * @param {*} gravity
     */
    setGravity(gravity) {
      if (!gravity || gravityLimit.includes(gravity) === false) {
        throw Error('Wrong Gravity');
      }
      this.gravity = gravity;
      return this;
    }
    // TODO: need create others valueFunction()
  },
);

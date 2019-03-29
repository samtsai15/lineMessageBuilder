const { mix } = require('mics');

module.exports = mix(
  superclass => class Color extends superclass {
    setColor(color) {
      if (color) {
        if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color) === false) {
          throw Error(`Wrong color number ${color}`);
        }
        this.color = color;
      }
      return this;
    }
  },
);

const { mix } = require('mics');

module.exports = mix(
  superclass => class Wrap extends superclass {
    setWrap(wrap) {
      if (wrap !== null && wrap !== undefined) {
        this.wrap = wrap;
      }
      return this;
    }
  },
);

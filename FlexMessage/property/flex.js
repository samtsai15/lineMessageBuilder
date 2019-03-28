const { mix } = require('mics');

module.exports = mix(
  superclass => class Flex extends superclass {
    setFlex(flex) {
      if (flex !== null && flex !== undefined && Number.isInteger(flex)) {
        this.flex = flex;
      }
      return this;
    }
  },
);

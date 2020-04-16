const { mix } = require('mics');

const { Margin, Color } = require('../property/index');

module.exports = mix(
  Margin,
  Color,
  superclass => class Separator extends superclass {
    constructor(separator = null) {
      super();
      this.type = 'separator';

      if (separator) {
        if (separator.margin) this.setMargin(separator.margin);
        if (separator.color) this.setSpacing(separator.color);
      }

      return this;
    }
  },
);

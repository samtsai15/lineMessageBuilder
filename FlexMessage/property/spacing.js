/**
 * Spacing property.
 */
const { mix } = require('mics');

module.exports = mix(
  superclass => class Spacing extends superclass {
    /**
     *
     * @param {*} spacing
     */
    setSpacing(spacing) {
      this.spacing = spacing;
      return this;
    }

    setSpacingSM() {
      this.spacing = 'sm';
      return this;
    }

    setSpacingLG() {
      this.spacing = 'lg';
      return this;
    }
  },
);

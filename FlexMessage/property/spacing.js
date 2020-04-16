/**
 * Spacing property.
 */
const { mix } = require('mics');

const spacingLimit = ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

module.exports = mix(
  superclass => class Spacing extends superclass {
    /**
       *
       * @param {*} spacing
       */
    setSpacing(spacing) {
      if (spacing) {
        if (spacingLimit.includes(spacing) === false) {
          throw Error('Wrong Spacing');
        }
        this.spacing = spacing;
      }
      return this;
    }

    setSpacingNone() {
      this.spacing = 'none';
      return this;
    }

    setSpacingXs() {
      this.spacing = 'xs';
      return this;
    }

    setSpacingSm() {
      this.spacing = 'sm';
      return this;
    }

    setSpacingMd() {
      this.spacing = 'md';
      return this;
    }

    setSpacingLg() {
      this.spacing = 'lg';
      return this;
    }

    setSpacingXl() {
      this.spacing = 'xl';
      return this;
    }

    setSpacingXxl() {
      this.spacing = 'xxl';
      return this;
    }
  },
);

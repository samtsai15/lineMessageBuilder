const { mix } = require('mics');

const marginLimit = ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'or', 'xxl'];

module.exports = mix(
  superclass => class Margin extends superclass {
    /**
     *
     * @param {*} margin
     */
    setMargin(margin) {
      if (!margin || marginLimit.includes(margin) === false) {
        throw Error('Wrong Margin');
      }
      this.margin = margin;
      return this;
    }

    setMarginNone() {
      this.margin = 'none';
      return this;
    }

    // TODO: need create others valueFunction()
  },
);

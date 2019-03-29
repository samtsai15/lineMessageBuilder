const { mix } = require('mics');

const marginLimit = ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

module.exports = mix(
  superclass => class Margin extends superclass {
    /**
     *
     * @param {*} margin
     */
    setMargin(margin) {
      if (margin) {
        if (marginLimit.includes(margin) === false) {
          throw Error('Wrong Margin');
        }
        this.margin = margin;
      }
      return this;
    }

    setMarginNone() {
      this.margin = 'none';
      return this;
    }

    setMarginXs() {
      this.margin = 'xs';
      return this;
    }

    setMarginSm() {
      this.margin = 'sm';
      return this;
    }

    setMarginMd() {
      this.margin = 'md';
      return this;
    }

    setMarginLg() {
      this.margin = 'lg';
      return this;
    }

    setMarginXl() {
      this.margin = 'xl';
      return this;
    }

    setMarginXxl() {
      this.margin = 'xxl';
      return this;
    }


    // TODO: need create others valueFunction()
  },
);

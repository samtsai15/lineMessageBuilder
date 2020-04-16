const { mix } = require('mics');

const sizeLimit = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

module.exports = mix(
  superclass => class Size extends superclass {
    /**
     *
     * @param {*} size
     */
    setSize(size) {
      if (size) {
        if (sizeLimit.includes(size) === false) {
          throw Error('Wrong Size');
        }
        this.size = size;
      }


      return this;
    }

    setSizeXs() {
      this.size = 'xs';
      return this;
    }

    setSizeSm() {
      this.size = 'sm';
      return this;
    }

    setSizeMd() {
      this.size = 'md';
      return this;
    }

    setSizeLg() {
      this.size = 'lg';
      return this;
    }

    setSizeXl() {
      this.size = 'xl';
      return this;
    }

    setSizeXxl() {
      this.size = 'xxl';
      return this;
    }
  },
);

/**
 * Layout property.
 */
const { mix } = require('mics');

const layoutLimit = ['horizontal', 'vertical', 'baseline'];
module.exports = mix(
  superclass => class Layout extends superclass {
    /**
     * Manual set value.
     * @param {*} layout
     */
    setLayout(layout) {
      if (layout) {
        if (layoutLimit.includes(layout) === false) {
          throw Error(`Need set ${this.type} layout : ${layoutLimit}`);
        }
        this.layout = layout;
      }
      return this;
    }

    setLayoutHorizontal() {
      this.layout = 'horizontal';
      return this;
    }

    setLayoutVertical() {
      this.layout = 'vertical';
      return this;
    }

    setLayoutBaseline() {
      this.layout = 'baseline';
      return this;
    }
  },
);

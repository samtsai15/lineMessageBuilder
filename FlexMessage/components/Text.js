const { mix } = require('mics');

const {
  Spacing, Margin, Layout, Flex, Weight, Size, Gravity, Wrap, Color,
} = require('../property/index');

module.exports = mix(
  Spacing,
  Layout,
  Margin,
  Flex,
  Weight,
  Size,
  Gravity,
  Wrap,
  Color,
  superclass => class Text extends superclass {
    constructor(text, options) {
      super();
      this.type = 'text';
      this.setText(text);
      this.setOptions(options);
    }

    setText(text) {
      if (!text) {
        throw Error('Need input text');
      }
      if (typeof text !== 'string') {
        throw Error('not String');
      }
      this.text = text;
      return this;
    }

    setOptions(options) {
      if (options) {
        this.setFlex(options.flex);
        this.setMargin(options.margin);
        this.setSize(options.size);
        this.setAlign(options.align);
        this.setGravity(options.gravity);
        this.setWrap(options.wrap);
        this.setMaxLines(options.maxLines);
        this.setWeight(options.weight);
        this.setColor(options.color);
        this.setAction(options.action);
      }
      return this;
    }

    // Text only
    setAlign(align) {
      if (align) this.align = align;
      return this;
    }

    setMaxLines(maxLines) {
      if (maxLines) this.maxLines = maxLines;
      return this;
    }

    setAction(action) {
      if (action) this.action = action;
      return this;
    }
  },
);

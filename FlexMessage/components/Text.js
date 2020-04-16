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
        if (options.flex) this.setFlex(options.flex);
        if (options.margin) this.setMargin(options.margin);
        if (options.size) this.setSize(options.size);
        if (options.align) this.setAlign(options.align);
        if (options.gravity) this.setGravity(options.gravity);
        if (options.wrap) this.setWrap(options.wrap);
        if (options.maxLines) this.setMaxLines(options.maxLines);
        if (options.weight) this.setWeight(options.weight);
        if (options.color) this.setColor(options.color);
        if (options.action) this.setAction(options.action);
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

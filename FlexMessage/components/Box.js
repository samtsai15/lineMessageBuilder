const { mix } = require('mics');

const {
  Spacing, Margin, Layout, Flex,
} = require('../property/index');

module.exports = mix(
  Spacing,
  Layout,
  Margin,
  Flex,
  superclass => class Box extends superclass {
    constructor(box = null) {
      super();
      this.type = 'box';
      this.contents = [];
      if (box) {
        if (box.layout) this.setLayout(box.layout);
        if (box.margin) this.setMargin(box.margin);
        if (box.spacing) this.setSpacing(box.spacing);
        if (box.contents) this.setContents(box.contents);
      }
      return this;
    }

    addContent(content) {
      this.contents.push(content);
      return this;
    }

    setContents(contents) {
      if (!contents) {
        throw Error(`Need set ${this.type} contents: Array`);
      }

      this.contents = contents;
      return this;
    }
  },
);

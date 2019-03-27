const layoutLimit = ['horizontal', 'vertical', 'baseline'];
// const util = require('./Base');
const Text = require('./Text');
const Base = require('./Base');
const Separator = require('./Separator');

module.exports = class Box extends Base {
  constructor(box = null) {
    super();
    this.type = 'box';
    this.contents = [];
    // console.log(this);
    if (box) {
      if (box.layout) this.setLayout(box.layout);
      if (box.contents) this.setContents(box.contents);
      if (box.margin) super.setMargin(box.margin);
    }
  }

  addContent(content) {
    this.contents.push(content);
    return this;
  }

  addTextContent(text, options) {
    this.contents.push(new Text(text, options));
    return this;
  }

  addSeparatorContent() {
    this.contents.push(new Separator());
    return this;
  }

  setContents(contents) {
    if (!contents) {
      throw Error(`Need set ${this.type} contents: Array`);
    }

    this.contents = contents;
    return this;
  }

  setSpacing(spacing) {
    this.spacing = spacing;
    return this;
  }

  setFlex(flex) {
    if (flex) this.flex = flex;
    return this;
  }

  setLayout(layout) {
    if (!layout || layoutLimit.includes(layout) === false) {
      throw Error(`Need set ${this.type} layout : ${layoutLimit}`);
    }

    // set 'layout' property
    this.layout = layout;
    return this;
  }
};

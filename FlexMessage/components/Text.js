const Base = require('./Base');

module.exports = class Text extends Base {
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
      super.setMargin(options.margin);
      this.setSize(options.size);
      this.setAlign(options.align);
      this.setGravity(options.gravity);
      this.setWrap(options.wrap);
      this.setMaxLines(options.maxLines);
      super.setWeight(options.weight);
      this.setColor(options.color);
      this.setAction(options.action);
    }
    return this;
  }

  /**
   *
   * @param {*} flex
   */
  setFlex(flex) {
    if (flex !== null && flex !== undefined && Number.isInteger(flex)) {
      this.flex = flex;
    }
    return this;
  }

  // super.setMargin()

  setSize(size) {
    if (size) this.size = size;
    return this;
  }

  setAlign(align) {
    if (align) this.align = align;
    return this;
  }

  setGravity(gravity) {
    if (gravity) this.gravity = gravity;
    return this;
  }

  setWrap(wrap) {
    if (wrap) this.wrap = wrap;
    return this;
  }

  setMaxLines(maxLines) {
    if (maxLines) this.maxLines = maxLines;
    return this;
  }

  // super.setWeight()

  setColor(color) {
    if (color) this.color = color;
    return this;
  }

  setAction(action) {
    if (action) this.action = action;
    return this;
  }
};

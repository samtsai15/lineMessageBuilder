const { mix } = require('mics');

const {
  Margin, Flex, Size, Gravity,
} = require('../property/index');

const image = mix(
  Margin,
  Flex,
  Size,
  Gravity,
  superclass => class Image extends superclass {
    constructor(body) {
      super();
      this.type = 'image';

      if (body.flex) this.setFlex(body.flex);
      if (body.margin) this.setMargin(body.margin);
      if (body.size) this.setSize(body.size);
      if (body.url) this.setUrl(body.url);
      if (body.aspectRatio) this.aspectRatio = body.aspectRatio;
      if (body.aspectMode) this.aspectMode = body.aspectMode;

      return this;
    }

    setUrl(url) {
      this.url = url;
      return this;
    }
  },
);

module.exports = image;

const Container = require('./container/index');

const {
  Header, Hero, Body, Footer, Style,
} = Container;

const checkClassName = obj => obj.constructor.name;

class BubbleMessage {
  constructor() {
    this.type = 'bubble';
  }

  setHeader(header) {
    if (header) {
      if (checkClassName(header) !== 'Header') {
        this.header = new Header(header);
      } else {
        this.header = header;
      }
    }
    return this;
  }

  // Set contents Hero section.
  setHero(hero) {
    if (hero) {
      if (checkClassName(hero) !== 'Hero') {
        this.hero = new Hero(hero);
      } else {
        this.hero = hero;
      }
    }
    return this;
  }

  // Set contents body section.
  setBody(body) {
    if (body) {
      if (checkClassName(body) !== 'Body') {
        this.body = new Body(body);
      } else {
        this.body = body;
      }
    }
    return this;
  }

  // Set contents footer section.
  setFooter(footer) {
    if (footer) {
      if (checkClassName(footer) !== 'Footer') {
        this.footer = new Footer(footer);
      } else {
        this.footer = footer;
      }
    }
    return this;
  }

  // Set contents style section.
  setStyle(style) {
    if (style) {
      if (checkClassName(style) !== 'Style') {
        this.contents.style = new Style(style);
      } else {
        this.contents.style = style;
      }
    }
    return this;
  }
}

class FlexMessage {
  constructor(contents) {
    this.type = 'flex';
    this.contents = contents || {};
  }

  // Set FlexMessage altText.
  setAltText(text) {
    if (text) this.altText = text;
    return this;
  }

  // Set FlexMessage direction.
  setDirection(direction) {
    if (direction) this.direction = direction;
    return this;
  }

  // Set contents type value (bubble , carousel).
  setContentsType(type) {
    this.contents.type = type;
    return this;
  }

  setContentsTypeCarousel() {
    this.contents.type = 'carousel';
    this.contents.contents = [];
    return this;
  }

  addCarouselContent(bubble) {
    if (this.contents.type !== 'carousel') {
      throw Error('need set type: carousel');
    }
    this.contents.contents.push(bubble);
    return this;
  }

  setBubbleContent(content) {
    this.contents = content;
    return this;
  }
}

module.exports = {
  FlexMessage,
  BubbleMessage,
};

const Container = require('./container/index');
const { Header, Hero, Body, Footer, Style } = Container;


const checkClassName = obj => obj.constructor.name;

module.exports = class FlexMessage {
  constructor(contents, altText, direction) {
    this.type = 'flex';
    this.setAltText(altText);
    this.setDirection(direction);
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

  // Set contents type value (bubble).
  setContentsType(type) {
    this.contents.type = type;
    return this;
  }

  // Set contents header section.
  setHeader(header) {
    if (header) {
      if (checkClassName(header) !== 'Header') {
        this.contents.header = new Header(header);
      } else {
        this.contents.header = header;
      }
    }
    return this;
  }

  // Set contents Hero section.
  setHero(hero) {
    if (hero) {
      if (checkClassName(hero) !== 'Hero') {
        this.contents.hero = new Hero(hero);
      } else {
        this.contents.hero = hero;
      }
    }
    return this;
  }

  // Set contents body section.
  setBody(body) {
    if (body) {
      if (checkClassName(body) !== 'Body') {
        this.contents.body = new Body(body);
      } else {
        this.contents.body = body;
      }
    }
    return this;
  }

  // Set contents footer section.
  setFooter(footer) {
    if (footer) {
      if (checkClassName(footer) !== 'Footer') {
        this.contents.footer = new Footer(footer);
      } else {
        this.contents.footer = footer;
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

  setContents(messageObject) {
    this.setHeader(messageObject.header);
    this.setHero(messageObject.hero);
    this.setBody(messageObject.body);
    this.setFooter(messageObject.footer);
    this.setStyle(messageObject.style);

    return this;
  }
}


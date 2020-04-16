const Image = require('../components/Image');

module.exports = class Hero extends Image {
  constructor(hero) {
    super(hero);
    return this;
  }
};

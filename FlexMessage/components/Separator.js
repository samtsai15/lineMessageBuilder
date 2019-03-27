const Base = require('./Base');

module.exports = class Separator extends Base {
  constructor(margin) {
    super();
    this.type = 'separator';
    // this.margin;
    if (margin) this.margin = margin;
  }
};

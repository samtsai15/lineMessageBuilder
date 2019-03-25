module.exports = class Separator {
  constructor(margin, color) {
    this.type = 'separator';
    if (margin) this.margin = margin;
    if (color) this.color = color;
  }
};

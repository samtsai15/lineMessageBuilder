const marginLimit = ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'or', 'xxl'];
module.exports = class util {
  constructor() {
    return this;
  }

  setMargin(margin) {
    if (margin) {
      if (marginLimit.includes(margin)) {
        this.margin = margin;
      } else {
        throw Error('Wrong Margin');
      }
    }
    return this;
  }

  setWeight(weight) {
    if (weight) this.weight = weight;
    return this;
  }
};

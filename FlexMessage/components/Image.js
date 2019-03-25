module.exports = class Image {
  constructor(body) {
    this.type = 'image';

    if (body.url) {
      this.setUrl(body.url);
    }
  }

  setUrl(url) {
    this.url = url;
    return this;
  }
};

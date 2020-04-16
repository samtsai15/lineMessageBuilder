const util = require('util');
const { FlexMessage } = require('../index');

// Method 1 : set altext and big contents;
const message = new FlexMessage('pushMessage1', {
  header: {},
  hero: {},
  body: {},
  footer: {},
});
console.log(util.inspect(message, false, null, true /* enable colors */));

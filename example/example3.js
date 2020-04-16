const util = require('util');

const { FlexMessage } = require('../index');


const message = new FlexMessage()
  .setContentsType('bubble')
  .setAltText('pushMessage3')
  .setHeader({ layout: 'baseline', contents: [] });

console.log(util.inspect(message, false, null, true /* enable colors */));

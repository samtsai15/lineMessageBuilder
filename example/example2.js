const util = require('util');
const { FlexMessage } = require('../index');

// method 2 :
const message = new FlexMessage();
message.setAltText('pushMessage2');
message.setBubbleContents({
  header: {
    layout: 'baseline',
    contents: [{}],
  },
});

console.log(util.inspect(message, false, null, true /* enable colors */));

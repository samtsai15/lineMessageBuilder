const { FlexMessage, Header, Body } = require('../index');
const Box = require('../FlexMessage/components/Box');
// Header = Box

const header = new Header()
  .setLayout('vertical')
  .addTextContent('您的訂單已成立', {
    size: 'lg',
    weight: 'bold',
    color: '#313C69',
    wrap: true,
  })
  .addTextContent('請於一天內完成繳款', {
    margin: 'sm',
    size: 'md',
    color: '#70747D',
  })
  .addSeparatorContent();

const bodyBox = new Box()
  .setLayout('vertical')
  .setSpacing('md')
  .setMargin('xs')
  .addContent({
    type: 'text',
    text: '2018 DATE Summit 數位商務大趨勢 國際匯壇',
    flex: 2,
    margin: 'none',
    size: 'lg',
    gravity: 'top',
    weight: 'bold',
    color: '#2B2C37',
    action: {
      type: 'uri',
      uri: 'https://www.ecpay.com.tw/Service/pay_qa_atm_acntr',
    },
    wrap: true,
  })
  .addTextContent('週日上午票 1 張', {
    flex: 2,
    margin: 'lg',
    size: 'md',
    gravity: 'center',
  })
  .addTextContent('週日下午票 1 張', {
    flex: 2,
    margin: 'lg',
    size: 'md',
    gravity: 'center',
  })
  .addContent({
    type: 'box',
    layout: 'baseline',
    margin: 'xl',
    contents: [
      {
        type: 'text',
        text: '金額',
        size: 'md',
        color: '#70747D',
      },
      {
        type: 'text',
        text: 'NT$ 1,940',
        flex: 2,
        size: 'lg',
        align: 'end',
        weight: 'bold',
        color: '#2B2C37',
        wrap: true,
      },
    ],
  })
  .addContent({
    type: 'box',
    layout: 'baseline',
    contents: [

      {

        type: 'text',

        text: '付款方式',

        color: '#70747D',

      },

      {

        type: 'text',

        text: 'ATM 繳費',

        flex: 2,

        size: 'md',

        align: 'end',

        color: '#2B2C37',

      },

    ],
  })
  .addContent({

    type: 'box',

    layout: 'baseline',

    contents: [

      {

        type: 'text',

        text: '付款期限',

        color: '#70747D',

      },

      {

        type: 'text',

        text: '2018-11-04 23:59:59',

        flex: 2,

        align: 'end',

        color: '#2B2C37',

      },

    ],

  })
  .addSeparatorContent()
  .addContent({

    type: 'box',

    layout: 'vertical',

    margin: 'lg',

    contents: [

      {

        type: 'text',

        text: '銀行代碼',

        margin: 'lg',

        color: '#70747D',

      },

      {

        type: 'text',

        text: '808 玉山銀行',

        flex: 2,

        margin: 'md',

        size: 'lg',

        align: 'start',

        color: '#2B2C37',
      },
    ],
  })
  .addContent({

    type: 'box',

    layout: 'vertical',

    margin: 'lg',

    contents: [

      {
        type: 'text',
        text: '銀行帳號',
        gravity: 'top',
        color: '#70747D',
      },

      {
        type: 'text',
        text: '9205 6190 4349 5174',
        flex: 0,
        margin: 'md',
        size: 'xl',
        align: 'start',
        color: '#5B78A9',
        wrap: true,
      },

    ],

  });
const body = new Body()
  .setSpacing('sm')
  .setLayout('horizontal')
  .setMargin('xs')
  .addContent(bodyBox);

// console.log(body);
const message = new FlexMessage()
//   .setContentsType('bubble')
//   .setAltText('pushMessage3')
//   .setDirection('ltr')
  .setHeader(header);
//   .setBody(body);

console.log(message);


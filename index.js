const path = require('path');
const puppeteer = require('puppeteer');
const gatsbyStorefrontTest = require('./gatsbystorefront');
const shopifyTest = require('./shopify');

const runTests = async () => {
  Promise.all([
    shopifyTest(),
    gatsbyStorefrontTest(),
    puppeteer.launch({
      headless: false,
      args: [
        '--window-position=2150,1250',
        '--window-size=2560,220',
        `--app=file:${path.join(__dirname, 'timer.html')}`,
        '--incognito',
        '--suppress-message-center-popups',
      ],
    }),
  ]);
};

console.log('\nStart tests:');

runTests();

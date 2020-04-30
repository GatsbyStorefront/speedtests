const path = require('path');
const puppeteer = require('puppeteer');

const runTime = (startTime, endTime) => (endTime - startTime) / 1000;

const gatsbyStorefrontTest = async () => {
  let startTime, endTime;

  try {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 20,
      args: ['--window-position=0,0', '--window-size=1280,1220'],
    });
    const page = await browser.newPage();
    await page.setCacheEnabled(false);

    const navigationPromise = page.waitForNavigation({
      waitUntil: ['load', 'domcontentloaded'],
    });

    startTime = new Date();

    // 1. Open a store
    await page.goto('https://demo.gatsbystorefront.com/');
    await page.setViewport({ width: 1280, height: 1220 });
    await navigationPromise;

    // 2. Click on Garden collection
    await page.waitForSelector(
      '.css-othmt1:nth-child(3) > .css-1eg5e04 > .css-chz01h > .css-152z3og > .css-1e36sa > .css-1s1czh0 > .css-byq9vv'
    );
    await page.click(
      '.css-othmt1:nth-child(3) > .css-1eg5e04 > .css-chz01h > .css-152z3og > .css-1e36sa > .css-1s1czh0 > .css-byq9vv'
    );
    await navigationPromise;

    // 3. Go to second page of collection
    await page.waitForSelector(
      '.css-29b0v5 > .css-1krdsyl > .css-1lx7oj > .css-1b2tw1j > .css-1pvys2c:nth-child(2)'
    );
    await page.click(
      '.css-29b0v5 > .css-1krdsyl > .css-1lx7oj > .css-1b2tw1j > .css-1pvys2c:nth-child(2)'
    );
    await navigationPromise;
    // 4. Cleck on "Cream Sofa" product
    await page.waitForSelector(
      '.css-rkwkv7:nth-child(10) > .css-103oqef > .css-vurnku > .css-1dzekcj > a > .css-0 > picture > img'
    );
    await page.click(
      '.css-rkwkv7:nth-child(10) > .css-103oqef > .css-vurnku > .css-1dzekcj > a > .css-0 > picture > img'
    );
    await navigationPromise;
    // 5. Add to cart
    await page.waitForSelector(
      '.css-1ey2if9 > .css-ibf0bs > .css-1m77ulh > .css-vurnku > .css-1sw5zln'
    );
    await page.click(
      '.css-1ey2if9 > .css-ibf0bs > .css-1m77ulh > .css-vurnku > .css-1sw5zln'
    );
    await navigationPromise;

    //6. Back to main page
    await page.waitForSelector(
      '.css-155jfsn > .css-5i9hgn > .css-9xcta3 > .svg-inline--fa > path'
    );
    await page.click(
      '.css-155jfsn > .css-5i9hgn > .css-9xcta3 > .svg-inline--fa > path'
    );
    await navigationPromise;

    // 7. Visit Apparel collection
    await page.waitForSelector(
      '.css-othmt1:nth-child(2) > .css-1eg5e04 > .css-chz01h > .css-152z3og > .css-1e36sa > .css-1s1czh0 > .css-byq9vv'
    );
    await page.click(
      '.css-othmt1:nth-child(2) > .css-1eg5e04 > .css-chz01h > .css-152z3og > .css-1e36sa > .css-1s1czh0 > .css-byq9vv'
    );
    await navigationPromise;

    // 8. 1st product in collection
    await page.waitForSelector(
      '.css-rkwkv7:nth-child(2) > .css-103oqef > .css-vurnku > .css-1dzekcj > a > .css-0 > picture > img'
    );
    await page.click(
      '.css-rkwkv7:nth-child(2) > .css-103oqef > .css-vurnku > .css-1dzekcj > a > .css-0 > picture > img'
    );
    await navigationPromise;

    // 9. back to collection
    await page.waitForSelector(
      '.css-1u783nj > .css-1p4nx4e > .css-vurnku > .css-vurnku > a > .css-o2r3i5'
    );
    await page.click(
      '.css-1u783nj > .css-1p4nx4e > .css-vurnku > .css-vurnku > a > .css-o2r3i5'
    );
    await navigationPromise;

    // 10. 2nd product in collection
    await page.waitForSelector(
      '.css-rkwkv7:nth-child(3) > .css-103oqef > .css-vurnku > .css-1dzekcj > a > .css-0 > picture > img'
    );
    await page.click(
      '.css-rkwkv7:nth-child(3) > .css-103oqef > .css-vurnku > .css-1dzekcj > a > .css-0 > picture > img'
    );
    await navigationPromise;

    // 11. back to collection
    await page.waitForSelector(
      '.css-1u783nj > .css-1p4nx4e > .css-vurnku > .css-vurnku > a > .css-o2r3i5'
    );
    await page.click(
      '.css-1u783nj > .css-1p4nx4e > .css-vurnku > .css-vurnku > a > .css-o2r3i5'
    );
    await navigationPromise;

    // 12. 3rd product
    await page.waitForSelector(
      '.css-rkwkv7:nth-child(4) > .css-103oqef > .css-vurnku > .css-1dzekcj > a > .css-0 > picture > img'
    );
    await page.click(
      '.css-rkwkv7:nth-child(4) > .css-103oqef > .css-vurnku > .css-1dzekcj > a > .css-0 > picture > img'
    );
    await navigationPromise;

    // 13. back
    await page.waitForSelector(
      '.css-1u783nj > .css-1p4nx4e > .css-vurnku > .css-vurnku > a > .css-o2r3i5'
    );
    await page.click(
      '.css-1u783nj > .css-1p4nx4e > .css-vurnku > .css-vurnku > a > .css-o2r3i5'
    );
    await navigationPromise;

    // 14. 2nd page in collection
    await page.waitForSelector(
      '.css-29b0v5 > .css-1krdsyl > .css-1lx7oj > .css-1b2tw1j > .css-1pvys2c:nth-child(2)'
    );
    await page.click(
      '.css-29b0v5 > .css-1krdsyl > .css-1lx7oj > .css-1b2tw1j > .css-1pvys2c:nth-child(2)'
    );
    await navigationPromise;

    // 15. 3rd page in collection
    await page.waitForSelector(
      '.css-29b0v5 > .css-1krdsyl > .css-1lx7oj > .css-1b2tw1j > .css-1pvys2c:nth-child(4)'
    );
    await page.click(
      '.css-29b0v5 > .css-1krdsyl > .css-1lx7oj > .css-1b2tw1j > .css-1pvys2c:nth-child(4)'
    );
    await navigationPromise;

    // 16. last product in collection
    await page.waitForSelector(
      '.css-rkwkv7:nth-child(3) > .css-103oqef > .css-vurnku > .css-1dzekcj > a > .css-0 > picture > img'
    );
    await page.click(
      '.css-rkwkv7:nth-child(3) > .css-103oqef > .css-vurnku > .css-1dzekcj > a > .css-0 > picture > img'
    );
    await navigationPromise;

    endTime = new Date();
    console.log(
      'Gatsby Storefront test time: ',
      runTime(startTime, endTime) + 'sec'
    );
  } catch (e) {
    console.error(e);
  }
};

module.exports = gatsbyStorefrontTest;

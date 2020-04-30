const puppeteer = require('puppeteer');

const runTime = (startTime, endTime) => (endTime - startTime) / 1000;

const shopifyTest = async () => {
  let startTime, endTime;

  try {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 20,
      args: ['--window-position=1280,0', '--window-size=1280,1220'],
    });
    const page = await browser.newPage();
    await page.setCacheEnabled(false);

    const navigationPromise = page.waitForNavigation({
      waitUntil: ['load', 'domcontentloaded'],
    });

    startTime = new Date();

    // 1. Open a store
    await page.goto('https://storefrontify.com/');
    await page.setViewport({ width: 1280, height: 1220 });
    await navigationPromise;

    // 2. Click on Garden collection
    await page.waitForSelector(
      '#AccessibleNav > #SiteNav > li:nth-child(2) > .site-nav__link > .site-nav__label'
    );
    await page.click(
      '#AccessibleNav > #SiteNav > li:nth-child(2) > .site-nav__link > .site-nav__label'
    );
    await navigationPromise;

    // 3. Go to second page of collection
    await page.waitForSelector(
      '#Collection > .list--inline > li > .btn > .icon-arrow-right'
    );
    await page.click(
      '#Collection > .list--inline > li > .btn > .icon-arrow-right'
    );
    await navigationPromise;

    // 4. Cleck on "Cream Sofa" product
    await page.waitForSelector(
      '#Collection > .grid > .grid__item:nth-child(5) > .grid-view-item > .grid-view-item__link'
    );
    await page.click(
      '#Collection > .grid > .grid__item:nth-child(5) > .grid-view-item > .grid-view-item__link'
    );
    await navigationPromise;

    // 5. Add to cart
    await page.waitForSelector(
      '.grid__item > .product-single__meta > #product_form_4184602214484 > .product-form__item > .btn'
    );
    await page.click(
      '.grid__item > .product-single__meta > #product_form_4184602214484 > .product-form__item > .btn'
    );
    await navigationPromise;

    //6. Back to main page
    await page.waitForSelector(
      '.site-header > .grid > .grid__item > .h2 > .site-header__logo-link'
    );
    await page.click(
      '.site-header > .grid > .grid__item > .h2 > .site-header__logo-link'
    );
    await navigationPromise;

    // 7. Visit Apparel collection
    await page.waitForSelector(
      '#AccessibleNav > #SiteNav > li:nth-child(3) > .site-nav__link > .site-nav__label'
    );
    await page.click(
      '#AccessibleNav > #SiteNav > li:nth-child(3) > .site-nav__link > .site-nav__label'
    );
    await navigationPromise;

    // 8. 1st product in collection
    await page.waitForSelector(
      '#Collection > .grid > .grid__item:nth-child(1) > .grid-view-item > .grid-view-item__link'
    );
    await page.click(
      '#Collection > .grid > .grid__item:nth-child(1) > .grid-view-item > .grid-view-item__link'
    );
    await navigationPromise;

    // 9. back to collection
    await page.waitForSelector(
      '#AccessibleNav > #SiteNav > .site-nav--active > .site-nav__link > .site-nav__label'
    );
    await page.click(
      '#AccessibleNav > #SiteNav > .site-nav--active > .site-nav__link > .site-nav__label'
    );
    await navigationPromise;

    // 10. 2nd product in collection
    await page.waitForSelector(
      '#Collection > .grid > .grid__item:nth-child(2) > .grid-view-item > .grid-view-item__link'
    );
    await page.click(
      '#Collection > .grid > .grid__item:nth-child(2) > .grid-view-item > .grid-view-item__link'
    );
    await navigationPromise;

    // 11. back to collection
    await page.waitForSelector(
      '#AccessibleNav > #SiteNav > .site-nav--active > .site-nav__link > .site-nav__label'
    );
    await page.click(
      '#AccessibleNav > #SiteNav > .site-nav--active > .site-nav__link > .site-nav__label'
    );
    await navigationPromise;

    // 12. 3rd product
    await page.waitForSelector(
      '#Collection > .grid > .grid__item:nth-child(3) > .grid-view-item > .grid-view-item__link'
    );
    await page.click(
      '#Collection > .grid > .grid__item:nth-child(3) > .grid-view-item > .grid-view-item__link'
    );
    await navigationPromise;

    // 13. back
    await page.waitForSelector(
      '#AccessibleNav > #SiteNav > .site-nav--active > .site-nav__link > .site-nav__label'
    );
    await page.click(
      '#AccessibleNav > #SiteNav > .site-nav--active > .site-nav__link > .site-nav__label'
    );
    await navigationPromise;

    // 14. 2nd page in collection
    await page.waitForSelector(
      'div > #Collection > .list--inline > li:nth-child(3) > .btn'
    );
    await page.click(
      'div > #Collection > .list--inline > li:nth-child(3) > .btn'
    );
    await navigationPromise;

    // 15. 3rd page in collection
    await page.waitForSelector(
      '#Collection > .list--inline > li > .btn > .icon-arrow-right'
    );
    await page.click(
      '#Collection > .list--inline > li > .btn > .icon-arrow-right'
    );
    await navigationPromise;

    // 16. last product in collection
    await page.waitForSelector(
      '#Collection > .grid > .grid__item:nth-child(4) > .grid-view-item > .grid-view-item__link'
    );
    await page.click(
      '#Collection > .grid > .grid__item:nth-child(4) > .grid-view-item > .grid-view-item__link'
    );

    await navigationPromise;

    endTime = new Date();
    console.log('Shopify test time: ', runTime(startTime, endTime) + 'sec');
  } catch (e) {
    console.error(e);
  }
};

module.exports = shopifyTest;

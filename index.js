const puppeteer = require('puppeteer');
const PuppeteerScreenRecorder = require('puppeteer-video-recorder');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const recorder = new PuppeteerScreenRecorder();
  await recorder.init(page); // video must have .mp4 has an extension.
  await recorder.start(); // video must have .mp4 has an extension.
  await page.goto('http://www.hillarius.com.br/home-sp/');

  //await page.goto('https://www.instagram.com/p/CMF2EiEhSvX/');
  await recorder.stop();
  await browser.close();
})();

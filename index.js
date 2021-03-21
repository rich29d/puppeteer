const puppeteer = require('puppeteer');
const PuppeteerScreenRecorder = require('puppeteer-video-recorder');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const recorder = new PuppeteerScreenRecorder();
  await recorder.init(page, './'); 
  await recorder.start(); 
  await page.goto('http://www.hillarius.com.br/home-sp/');

  //await page.goto('https://www.instagram.com/p/CMF2EiEhSvX/');
  await recorder.stop();
  await browser.close();
})();

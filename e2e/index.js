const puppeteer = require("puppeteer");
const assert = require("assert");

/*
(async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");
  await page.screenshot({ path: "example.png" });

  const title = await page.$('h1 a').textContent;
  assert.equal(title, 'drinks');

  await browser.close();
})();
*/

(async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");
  await page.waitForSelector("h1");
  const headingText = await page.evaluate(
    () => document.querySelector("h1 a").textContent
  );

  assert.equal(headingText, "Drinks");

  await browser.close();
})();

const ejs = require('ejs')
const fs = require("fs");
const path = require('path')
const puppeteer = require('puppeteer')
const os = require('os')
export async function renderStock(data,metaData) {
  const html = await ejs.renderFile(path.join(__dirname, '../views/chart.ejs'), {
    data: data,
    name: `Historical Price of ${metaData.ric} from ${metaData.startDate} to ${metaData.endDate}`
  })
  fs.writeFile(path.join(__dirname, `../views/${metaData.fileName}.html`), html, "utf8", (err) => {
    if (err) throw err;
    console.log('Saved! file :'+metaData.fileName);
  });
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ]
  })
  const page = await browser.newPage()
  await page.setContent(html)
  await page.waitFor(500);
  await page.screenshot({
    path: path.join(__dirname, `../views/${metaData.fileName}.png`)
  })
  await browser.close()
  return {
    stockPicture:`/stock/${metaData.fileName}.png`,
    previewPicture:`/stock/preview.png`,
    url:`/stock/${metaData.fileName}.html`
  }
}
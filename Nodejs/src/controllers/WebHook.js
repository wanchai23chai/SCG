var yahooFinance = require('yahoo-finance');
const { LineClient } = require('messaging-api-line');
const moment = require('moment')
const {renderStock} = require('../utils/generateStock')
const client = LineClient.connect({
  accessToken: "dvlpTcWSGHzWFYiFksbEAuvXCGQ52GcYcR9D0EzF4gccMLBMITIb1crqsoL1XLXBywZoPiMo3jW1SqebhWKnoQt2vhOzkB5uuaRP2s2ODPARVkRWVvE3TcIil09Q4UsqXCoK9635wvp9DsZ2zX1Ir49PbdgDzCFqoOLOYbqAITQ=",
  channelSecret: process.env.CHANNEL_SECRET,
});
export async function webHook(req, res, next) {
  const { replyToken,message } = req.body.events[0]  
  let reply = []  
  if (message.type === 'text') {
    const startDate = moment().subtract(90, 'days').format("YYYY-MM-DD")
    const endDate = moment().format("YYYY-MM-DD")    
    const ric = message.text.toUpperCase()
    const fileName = `${ric}_${startDate}_to_${endDate}`
    const apiData = {
      symbol: ric,
      from: startDate,
      to: endDate,
    }
    let data = await yahooFinance.historical(apiData);
    data = data.filter(data=>{
      if(data.open){
        return data
      }}).map((item)=>{
      delete item['volume']
      delete item['adjClose']
      delete item['symbol']
      item.avg = (item['low']+item['high'])/2
      return item
    })
    if(data.length>0){
      const metaData  = {
        startDate : startDate,
        endDate:endDate,
        fileName:fileName,
        ric:ric
      }
      const dataResponse = await renderStock(data,metaData)    
      console.log('render html complte')
      console.log(req.headers)
      reply.push({
        "type": "image",
        "originalContentUrl": `https://${req.host}${dataResponse.stockPicture}`,
        "previewImageUrl": `https://${req.host}${dataResponse.previewPicture}`
    })
    }else{
      reply.push({
        type: 'text',
        text: 'เราไม่พบข้อมูลหุ้นที่คุณค้นหา....โปรดลองใหม่อีกครั้งจ้า',
      })
    }

  } else {
    reply.push({
      type: 'text',
      text: 'ขออภัยในความไม่สะดวก BOT รองรับการทำงานแค่ตัวอักษรของหุ้นเท่านั้น',
    })
  }
  client.reply(replyToken, reply);
  return res.json(reply)
}
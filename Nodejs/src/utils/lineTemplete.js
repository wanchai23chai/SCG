export function displayMaxMin(meta) {
  let bubble = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [{
          "type": "text",
          "text": `ข้อมูลสรุปของหุ้น ${meta.ric}`,
          "color": "#ffffff",
          "align": "start",
          "size": "xl",
          "gravity": "center"
        }, {
          "type": "text",
          "text": `จากวันที่ ${meta.startDate} ถึง ${meta.endDate}`,
          "color": "#ffffff",
          "align": "start",
          "size": "xs",
          "gravity": "center"
        }],
        "backgroundColor": "#27ACB2",
        "paddingTop": "19px",
        "paddingAll": "12px",
        "paddingBottom": "16px"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [{
          "type": "box",
          "layout": "horizontal",
          "spacing": "md",
          "contents": [{
              "type": "text",
              "text": `ค่าสูงสุดของ High : ${Math.max(...meta.sum.max).toString()} `,
              "color": "#8C8C8C",
              "wrap": true
            },
            {
              "type": "separator"
            },
            {
              "type": "text",
              "text": `ค่าต่ำสุดของ Low : ${Math.min(...meta.sum.min).toString()}`,
              "color": "#8C8C8C",
              "wrap": true
            }
          ],
          "flex": 1
        }],
        "spacing": "md",
        "paddingAll": "12px"
      },
      "footer": {
        "type": "box",
        "layout": "horizontal",
        "contents": [{
          "type": "button",
          "style": "secondary",
          "action": {
            "type": "uri",
            "label": "Go to details",
            "uri": `${meta.url}`
          }
        }]
      }
    }
  }
  return bubble
}
export function displayMaxMin(meta){
  let bubble = {
    "type": "carousel",
    "contents": [
      {
        "type": "bubble",
        "size": "mega",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": `Summary of ${meta.ric}`,
              "color": "#ffffff",
              "align": "start",
              "size": "xl",
              "gravity": "center"
            }, {
              "type": "text",
              "text": `from ${meta.startDate} to ${meta.endDate}`,
              "color": "#ffffff",
              "align": "start",
              "size": "xs",
              "gravity": "center"
            }
          ],
          "backgroundColor": "#27ACB2",
          "paddingTop": "19px",
          "paddingAll": "12px",
          "paddingBottom": "16px"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "box",
              "layout": "horizontal",
              "spacing": "md",
              "contents": [
                {
                  "type": "text",
                  "text": `Maximum High : ${Math.max(...meta.sum.max).toString()} `,
                  "color": "#8C8C8C",
                  "size": "sm",
                  "wrap": true
                },
                {
                  "type": "separator"
                },
                {
                  "type": "text",
                  "text":  `Minimum Low : ${Math.min(...meta.sum.min).toString()}`,
                  "color": "#8C8C8C",
                  "size": "sm",
                  "wrap": true
                }
              ],
              "flex": 1
            }
          ],
          "spacing": "md",
          "paddingAll": "12px"
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "button",
              "style": "secondary",
              "action": {
                "type": "uri",
                "label": "Go to details",
                "uri": `${meta.url}`
              }
            }
          ]
        }
      }
    ]
  }
return bubble
}
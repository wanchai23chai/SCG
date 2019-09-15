import axios from 'axios'
import querystring from 'querystring'
export async function lineAPI() {
  const dataSend = {
    grant_type: "client_credentials",
    client_id: process.env.LINE_CLIENT_ID,
    client_secret: process.env.LINE_CLIENT_SECRET
  }
  const headers = {
     'Content-Type': 'application/x-www-form-urlencoded'
  }
  return axios.post('https://api.line.me/v2/oauth/accessToken', querystring.stringify(dataSend), {
      headers: headers
  })
  
}
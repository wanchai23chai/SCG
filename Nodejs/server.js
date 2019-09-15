require("babel-core/register");
const env = require('dotenv')
if(process.env.NODE_ENV==='dev'){
    env.config({path:'./envs/dev/.env'})
}else{
    env.config({path:'./envs/prd/.env'})
}
const http = require('http')
const axios = require('axios')
const app = require('./src/app')
let port = process.env.PORT || '8000'
app.set('port', port)
let server = http.createServer(app)
server.listen(port)
console.log(`---------------- Server start ${port} -----------------`)
setInterval(function() {
    console.log('wake up heroku', new Date())
    axios.get("https://floating-waters-42919.herokuapp.com/check");
}, 1000*60*28);
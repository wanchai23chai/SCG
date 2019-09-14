require("babel-core/register");
const http = require('http')
const axios = require('axios')
const app = require('./src/app')
const os = require('os');
let port = process.env.PORT || '8000'
app.set('port', port)
let server = http.createServer(app)
server.listen(port)
console.log(`Server start : http://${os.hostname()}:${port}`)
setInterval(function() {
    console.log('wake up heroku', new Date())
    axios.get("https://floating-waters-42919.herokuapp.com/check");
}, 1000*60*28);
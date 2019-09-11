require("babel-core/register");
const http = require('http')
const app = require('./src/app')
const os = require('os');
let port = process.env.PORT || '8000'
app.set('port', port)
let server = http.createServer(app)
server.listen(port)
console.log(`Server start : http://${os.hostname()}:${port}`)
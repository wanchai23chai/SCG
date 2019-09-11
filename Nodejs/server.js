require("babel-core/register");
const http = require('http')
const app = require('./src/app')
const os = require('os');
// /** * Get port from environment and store in Express. */
let port = process.env.PORT || '8000'
app.set('port', port)

/** * Create HTTP server. */
let server = http.createServer(app)

/** * Listen on provided port, on all network interfaces. */
server.listen(port)
console.log(`Server start : http://${os.hostname()}:${port}`)
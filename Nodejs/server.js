import http from 'http'
import app from './app'
import os from 'os'
// /** * Get port from environment and store in Express. */
let port = process.env.PORT || '8000'
app.set('port', port)

/** * Create HTTP server. */
let server = http.createServer(app)

/** * Listen on provided port, on all network interfaces. */
server.listen(port)
console.log(`Server start : http://${os.hostname()}:${port}`)
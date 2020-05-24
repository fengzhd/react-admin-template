const http = require('http')
const app = require('../app.js')
var debug = require('debug')('demo:server');


const server = http.createServer(app.callback())
server.listen(3001);
server.on('listening', onListening);
server.on('error', (err) => {
  console.log(err)
});

function onListening() {
  console.log('server run on 3001')
}

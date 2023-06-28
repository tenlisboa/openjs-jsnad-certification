const net = require('net');

const server = net.createServer();
server.on('connection', (socket) => {
  console.log('received connection');
})

server.listen(8888);
console.log('port 8888');
server.on('listening', () => {
  console.log('listening');
})

const { createServer } = require('http');
const { setTimeout } = require('timers/promises');

const ac = new AbortController();
const { signal } = ac;

function asyncWork() {
  return new Promise((resolve, _) => {
    resolve(setTimeout(1000, 'will be logged', { signal }))
  });
}

const server = createServer((req, res) => {
  req.on('data', (chunk) => {
    const body = chunk.toString();
    asyncWork().then((result) => {
      res.end('done');
    });
    if (body === 'stop') {
      ac.abort();
    }
  });
});

server.listen(3000);
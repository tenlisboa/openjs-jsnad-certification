console.log('Início do programa');

const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'file.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Callback da leitura de arquivo');
});

// Even the threshold is 0, and it is scheduled after the readFile callback, it will be executed before.
// Becouse in the event loop, the timers phase comes before the pending callbacks phase.
setTimeout(() => {
  console.log('Callback do setTimeout');
}, 0);

console.log('Fim do programa');

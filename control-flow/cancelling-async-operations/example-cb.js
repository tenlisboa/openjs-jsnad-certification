const timeout = setTimeout(() => {
  console.log('Will not be logged');
}, 1000);

setImmediate(() => {clearTimeout(timeout)})
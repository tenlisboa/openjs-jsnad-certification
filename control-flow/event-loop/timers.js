const fs = require('fs');

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('/path/to/file', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 150ms to complete
console.time('someAsyncOperation');
someAsyncOperation(() => {
  const startCallback = Date.now();

  // do something that will take 150ms...
  while (Date.now() - startCallback < 150) {
    // do nothing
  }
  console.timeEnd('someAsyncOperation');
});

/**
 * If the poll something in the pool queue blocks for more than the timer's threshold,
 * the timer will be deferred to the next loop iteration.
 *
 * This happens because NodeJs doesn't want the timer to block the execution of the loop
 * so it defers the timer to the next iteration.
 */

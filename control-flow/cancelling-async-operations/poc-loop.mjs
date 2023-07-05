import { setTimeout } from "timers/promises";

const timeout = setTimeout(0, 'will be logged');

setImmediate(() => {
  console.log('Immediate');
});

console.log(await timeout)

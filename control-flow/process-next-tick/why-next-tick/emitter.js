const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  constructor() {
    super();
    // this.emit('event') // Here, it won't work because the event is emitted before the listener is added.
    process.nextTick(() => this.emit('event'));
  }
}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});

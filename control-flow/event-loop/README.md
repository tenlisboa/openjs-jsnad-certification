## Event Loop

The event loop have some phases, and each phase have a FIFO queue of callbacks to execute.

The phases are:
- Timers
- Pending Callbacks
- Idle, Prepare
- Poll
- Check
- Close Callbacks

### Timers

Timers callbacks are executed here, for example: `setTimeout` and `setInterval`.

### Pending Callbacks

Execute I/O callbacks deferred to the next loop iteration.
For example: `fs.readFile`.
When the operation is complete, the callback is pushed to the poll queue.

### Idle, Prepare

Only used internally.

### [Poll](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick#poll)

Retrieve new I/O events, execute their callbacks, if one or more callbacks are queued, the event loop will continue to the check phase, otherwise it will wait for new events.

For Example: `http.createServer` will put the callback in the poll queue if a new request is received.

The poll phase has two main functions:

1. Calculating how long it should block and poll for I/O, then
2. Processing events in the poll queue.

When the event loop enters the poll phase and there are no timers scheduled, one of two things will happen:
- If the __poll__ queue __is not empty__, the event loop will iterate through its queue of callbacks executing them synchronously until either the queue has been exhausted, or the system-dependent hard limit is reached.
- If the poll queue is empty, one of two more things will happen:
  - If scripts have been scheduled by setImmediate(), the event loop will end the poll phase and continue to the check phase to execute those scheduled scripts.
  - If scripts have not been scheduled by setImmediate(), the event loop will wait for callbacks to be added to the queue, then execute them immediately.

### Check

Execute `setImmediate` callbacks here.

So if the poll phase becomes Idle and there is some `setImmediate` callbacks scheduled, the event loop will continue to the check phase rather than waiting.

### Close Callbacks

Execute all close callbacks, like `socket.on('close', ...)`.

# EventEmitter class

EventEmitter is the base of many modules in nodeJS as HTTP, socket, net, etc. We can use it creating a new object as `new EventEmitter()` or event extending from it, like:"

```js

function MyEmitter (opts = {}) {
  this.name = opts.name
}

MyEmitter.prototype = Object.create(EventEmitter.prototype)

const event = new MyEmitter()

```

## Listening to events

One interesting thing is that order does matter when we are defining our event listeners, and there are two ways of doing it, the first is using the method alias `on`:
```js
event.on('myevent', () => console.log('myevent fired'))
```
And also the `addListener` method:
```js
event.addListener('myevent', () => console.log('myevent fired'))
```

The listeners are called in order:
```js

const { EventEmitter } = require('events')
const ee = new EventEmitter()
ee.on('my-event', () => { console.log('1st') })
ee.on('my-event', () => { console.log('2nd') })
ee.emit('my-event')

```

And so, you can prepend listeners to be called first using `prependListener` method.

## Emitting once

The method `once` will remove its listener once it is called.

## Removing a listener

The method `removeListener` can be called with the name o the event and the event function. I can remove a specific function for a given listener (Because a listener can be registered multiple times with different handle functions)

The method `removeAllListeners` can be called with the name of the event, and so, it will remove all listeners for that specific event. You can also call this method with no arguments, what means that all listeners for that EventEmitter instance will be removed.

## The error event

You have to register this listener before emitting an `error` event, because the EventEmitter will throw an exception if there's no listener to handle that event.

### OBS

The `emit` method is Syncronous, it emits the event in the current tick
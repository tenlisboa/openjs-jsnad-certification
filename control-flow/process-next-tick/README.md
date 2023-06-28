## process.nextTick()

When you call `process.nextTick()` in a given context, you guarantee that all callbacks passed to `process.nextTick()` will be executed before the event loop continuer regardless of how many I/O operations are pending in the event loop queue.

```js
process.nextTick(function () {
  console.log('nextTick callback');
});
console.log('scheduled');
```
One interesting thing to note is that the `process.nextTick()` allows the code to be loaded asynchronously but evaluated synchronously. This means that the code following the `process.nextTick()` call will be executed before any other I/O event or timer gets fired. As the example above, where the `console.log('scheduled')` is executed before the `console.log('nextTick callback')`.

### process.nextTick() vs setImmediate()

`process.nextTick()` fires immediately on the same phase of the event loop
`setImmediate()` fires on the following iteration or 'tick' of the event loop

The official recommendation is to user `setImmediate` in all cases.

# Callbacks

For convention, NodeJS callbacks have always an error as its first argument, if there's no error with the execution, it's gonna be `null`. This approach is known as `Errback`.

The way to reach a parallel execution using callbacks is simply calling them separately like:

```js
setTimeout(() => console.log('ops'), 100);
setTimeout(() => console.log('uhu'), 100);
```

But if you want to execute it in a serial way:

```js
setTimeout(() => {
  console.log('ops');

  setTimeout(() => console.log('uhu'), 100)
}, 100)
```
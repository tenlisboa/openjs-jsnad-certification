// @ts-nocheck
(() => {
  { // Example without process.nextTick, logs `bar undefined`
    let bar;

    function someAsyncCall(callback) {
      callback();
    }

    someAsyncCall(() => {
      console.log('bar', bar);
    });

    const init = Date.now()

    while (Date.now() - init < 10) {
      // do nothing
    }
    bar = 1;
  }

  { // Example without process.nextTick, logs `bar 1`
    let bar;

    function someAsyncCall(callback) {
      process.nextTick(callback);
    }

    someAsyncCall(() => {
      console.log('bar', bar);
    });

    const init = Date.now()

    while (Date.now() - init < 10) {
      // do nothing
    }
    bar = 1;
  }

  {
    let bar;

    function someAsyncCall(callback) {
      setImmediate(callback);
    }

    someAsyncCall(() => {
      console.log('bar', bar);
    });

    const init = Date.now()

    while (Date.now() - init < 10) {
      // do nothing
    }
    bar = 1;
  }
})()

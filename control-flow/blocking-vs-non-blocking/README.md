## Blocking vc Non-blocking

Whe a JS code have to wait for a non-blocking operation to complete, this occurs when the event loop could not continue while a blocking operation is waiting to complete.

NodeJS handle the I/O or API calling in a non-blocking way, so the event loop can continue to run while the operation is being executed.

### Woking with callbacks

Personally I don't like callbacks, because they are hard to read and understand, primarly if you have to nest them.

```js
const fs = require('fs');

fs.readFile('/path/to/file', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

You can promisify this callback using the `util` module.

```js
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

readFile('/path/to/file')
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

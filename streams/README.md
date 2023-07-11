# Streams

Basically behind the scenes, streams are EventEmitters, it inherits from it and uses the events widely known.

There are two types of stream modes, one is Binary and it is the default mode, and the other is Object. The diff is that in Binary streams deal only with Buffers in spite of in the Object that deals with JS objects regarding null type.

## Readable

One thing about readable streams is that it has a watermark for the amount of size that can be read before emitting a data event, that is 16kb, it means that if the data process has 64kb, 4 data events will be emitted.

### Readable.from

This instantiates a Readable from an interator like arrays.

```js
const { Readable } = require("stream");
const readable = Readable.from(["some", "data", "to", "read"]);
readable.on("data", (chunk) => {
  console.log("chunk: ", chunk);
});
readable.on("end", () => {
  console.log("end");
});
```

## Duplex and Transform

The Duplex is an contructor that implements read and write interfaces but not necessarily have casul relation with each other, the read and write can be used independently.

While Transform inherits from the Duplex but it has a contraint that enforces the relation between read and write, for example in a compression of file, where you read, tranform dada, and so write another file with the compressed data.

The `PassThrough` constructor is a Transform with no transform applied, it is used when a transform is required but no transformation is desired, like a placeholder.

## Pipe

Internally, the pipe method sets up a data listener on the readable stream and automatically writes to the writable stream as data becomes available.

Since pipe returns the stream passed to it, it is possible to chain pipe calls together: streamA.pipe(streamB).pipe(streamC). This is a commonly observed practice, but it's also bad practice to create pipelines this way. If a stream in the middle fails or closes for any reason, the other streams in the pipeline will not automatically close.

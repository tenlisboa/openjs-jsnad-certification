const { Writable, Readable, Transform, pipeline } = require('stream');

const dataSource = ['some', 'data', 'to', 'read'];
const dataTarget = [];

const createWritable = () => {
  return new Writable({
    objectMode: true,
    write(chunk, encoding, callback) {
      dataTarget.push(chunk);
      callback();
    }
  });
}

const createTransform = () => {
  return new Transform({
    objectMode: true,
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().toUpperCase());
      callback();
    }
  });
}

const createReadable = () => {
  return new Readable({
    objectMode: true,
    read() {
      if (dataSource.length === 0) this.push(null);
      else this.push(dataSource.shift());
    }
  });
}

const readable = createReadable();
const writable = createWritable();
const transform = createTransform();

pipeline(
  readable,
  transform,
  writable,
  (err) => {
    if (err) console.error('Pipeline failed.', err);
    else console.log('Pipeline succeeded.', dataTarget);
  }
);
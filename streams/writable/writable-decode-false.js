'use strict'

const { Writable } = require('stream')
const createWritable = () => {
  return new Writable({
    decodeStrings: false, // --> This allows only strings and buffers to be written to the stream.
    write(chunk, encoding, callback) {
      data.push(chunk)
      callback()
    }
  })
}
const data = []
const writable = createWritable()
writable.on('finish', () => { console.log('finish', data) })
writable.write('some ')
writable.write('data ')
writable.end('to write')

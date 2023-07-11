'use strict'

const { Writable } = require('stream')
const createWritable = () => {
  return new Writable({
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
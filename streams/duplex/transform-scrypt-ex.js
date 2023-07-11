'use strict'

const { Transform } = require('stream')
const scrypt = require('crypto').scrypt

const createTransformStream = () => {
  return new Transform({
    decodeStrings: false,
    encoding: 'hex',
    transform(chunk, encoding, callback) {
      scrypt(chunk, 'a-salt', 32, (err, key) => {
        if (err) {
          callback(err)
          return
        }
        callback(null, key)
      })
    }
  })
}

const transform = createTransformStream()

transform.on('data', (chunk) => { console.log('chunk: ', chunk) })

transform.write('some ')
transform.write('data ')
transform.end('to write')

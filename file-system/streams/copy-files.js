'use strict'

const { pipeline } = require('stream')
const { join, basename } = require('path')
const { createReadStream, createWriteStream } = require('fs')

pipeline(
  createReadStream(__filename),
  createWriteStream(join(__dirname, `${getCurrentFilename()}(copy).js`)),
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err)
    } else {
      console.log('Pipeline succeeded.')
    }
  }
)

function getCurrentFilename() {
  return basename(__filename)
}
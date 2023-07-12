'use strict'

const { pipeline, Transform } = require('stream')
const { join, basename } = require('path')
const { createReadStream, createWriteStream } = require('fs')

const createUppercaseTarnsform = () => {
  return new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().toUpperCase())
      callback()
    }
  })
}

pipeline(
  createReadStream(__filename),
  createUppercaseTarnsform(),
  createWriteStream(join(__dirname, `${getCurrentFilename()}(copy).txt`)),
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
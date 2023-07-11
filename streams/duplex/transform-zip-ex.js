'use strict'
const { createGzip } = require('zlib')
const fs = require('fs')
const readable = fs.createReadStream(__filename)
const writeable = fs.createWriteStream(__dirname + '/file.txt.gz')
const transform = createGzip()

transform.on('data', (data) => {
  writeable.write(data)
})

readable.on('data', (chunk) => {
  transform.write(chunk)
})
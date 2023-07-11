'use strict'

const fs = require('fs')
const readable = fs.createReadStream(__filename)
readable.on('data', (chunk) => {
  console.log('chunk: ', chunk)
})
readable.on('end', () => {
  console.log('end')
})
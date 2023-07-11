'use strict'

const { Readable } = require('stream')
const createReadStream = () => {
  const data = ['some', 'data', 'to', 'read']
  return new Readable({
    objectMode: true, // <--- instead of encoding
    read() {
      if (data.length === 0) {
        this.push(null)
      } else {
        this.push(data.shift())
      }
    }
  })
}
const readable = createReadStream()
readable.on('data', (chunk) => { console.log('chunk: ', chunk) })
readable.on('end', () => { console.log('end') })
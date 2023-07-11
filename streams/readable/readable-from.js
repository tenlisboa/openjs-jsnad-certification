'use strict'

const { Readable } = require('stream')
const readable = Readable.from(['some', 'data', 'to', 'read'])
readable.on('data', (chunk) => { console.log('chunk: ', chunk) })
readable.on('end', () => { console.log('end') })
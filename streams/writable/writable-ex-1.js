'use strict'

const fs = require('fs')
const writable = fs.createWriteStream(__dirname + '/file.txt')
writable.on('finish', () => { console.log('finish writing') })
writable.write('A\n')
writable.write('b\n')
writable.write('c\n')
writable.end('nothing more to write')
const Buffer = require('buffer')

const buff = Buffer.alloc(10)

console.log(buff);

const unsafeBuff = Buffer.allocUnsafe(10)

console.log(unsafeBuff, unsafeBuff.toString());
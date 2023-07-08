const { StringDecoder } = require('string_decoder')

const buffer = Buffer.from('👀')

const decoder = new StringDecoder();

console.log(decoder.write(buffer))

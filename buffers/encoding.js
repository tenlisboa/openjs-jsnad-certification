const hello = Buffer.from('Hello World', 'utf8')
const base = Buffer.from(hello.toString('base64'), 'base64')

console.log(base, hello.toString('base64'), base.toString('base64'));
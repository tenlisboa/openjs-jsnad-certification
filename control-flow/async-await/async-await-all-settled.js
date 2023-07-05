const { readFile } = require('fs').promises

const print = (contents) => {
  console.log(contents.toString())
}

const files = [__filename, 'foo', __filename]

async function run(){
  const promises = files.map(file => readFile(file))
  const data = await Promise.allSettled(promises)

  const contents = []

  data
    .forEach(({ status, reason, value }) => {
      if (status === 'rejected') console.error(reason)
      else contents.push(value)
    })

  print(Buffer.concat(contents))
}

run().catch(console.error)

module.exports = function (stream, callback) {
  const events = ['error', 'close', 'finish', 'end']

  function finished (err) {
    events.forEach((event) => {
      stream.removeListener(event, finished)
    })

    callback(err)
  }

  events.forEach((event) => {
    stream.on(event, finished)
  })
}
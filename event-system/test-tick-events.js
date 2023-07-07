'use strict'
const { EventEmitter } = require('events')

process.nextTick(console.log, 'Next Tick executed')

const ee = new EventEmitter()

// The callback function is called when the event is emitted in the current tick
// It means that the node does not schedule the ececution of the callback function for events
ee.on('error', (err) => {
  console.error(`You got an error Budy: ${err.message}`)
})

ee.emit('error', Error('timeout'))

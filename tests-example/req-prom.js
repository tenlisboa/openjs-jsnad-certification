'use strict'
const { setTimeout: timeout } = require('timers/promises')
module.exports = async (url) => {
  await timeout(300)
  if (url === 'ht‌tp://error.com') throw Error('network error')
  return Buffer.from('some data')
}
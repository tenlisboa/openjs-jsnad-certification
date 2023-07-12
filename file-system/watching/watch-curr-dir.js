'use strict'
const { watch } = require('fs')

watch(__filename, (evt, filename) => {
  console.log(evt, filename)
})
const { test } = require('tap')
const store = require('../store')

test('should have an error when input is a string', ({ ok, strictDeepEqual, end, ifError }) => {
  store('5', (err) => {
    ok(err)
    strictDeepEqual(err, Error('input must be a buffer'))
    end()
  })
})

test('should have an error when input is a number', ({ ok, strictDeepEqual, end, ifError }) => {
  store(1, (err) => {
    ok(err)
    strictDeepEqual(err, Error('input must be a buffer'))
    end()
  })
})

test('should have an error when input is a obj', ({ ok, strictDeepEqual, end, ifError }) => {
  store({}, (err) => {
    ok(err)
    strictDeepEqual(err, Error('input must be a buffer'))
    end()
  })
})

test('should have an error when input is null', ({ ok, strictDeepEqual, end, ifError }) => {
  store(null, (err) => {
    ok(err)
    strictDeepEqual(err, Error('input must be a buffer'))
    end()
  })
})

test('should return an object', ({ ok, end, ifError }) => {
  store(Buffer.from('hello'), (err, data) => {
    ifError(err)
    ok(data)
    end()
  })
})

test('should return an object with a property named "id"', ({ ok, end, ifError }) => {
  store(Buffer.from('hello'), (err, data) => {
    ifError(err)
    ok(data.id)
    end()
  })
})

test('should the id property be a string', ({ ok, end, ifError }) => {
  store(Buffer.from('hello'), (err, data) => {
    ifError(err)
    ok(typeof data.id === 'string')
    end()
  })
})

test('should the id property have a length of 4', ({ ok, end, ifError }) => {
  store(Buffer.from('hello'), (err, data) => {
    ifError(err)
    ok(data.id.length === 4)
    end()
  })
})
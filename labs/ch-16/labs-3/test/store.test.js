const { test, expect, describe } = require('@jest/globals');
const store = require('../store');

describe('#store function', () => {

  test('should reject if input is not a buffer', () => {
    expect(store('5')).rejects.toThrow('input must be a buffer')
    expect(store(5)).rejects.toThrow('input must be a buffer')
    expect(store({})).rejects.toThrow('input must be a buffer')
    expect(store(null)).rejects.toThrow('input must be a buffer')
  })

  test('should resolve an object', () => {
    expect(store(Buffer.from('hello'))).resolves.toBeInstanceOf(Object)
  })

  test('should resolve an object with a property named "id"', () => {
    expect(store(Buffer.from('hello'))).resolves.toHaveProperty('id')
  })

  test('should the id property be a string', () => {
    expect(store(Buffer.from('hello'))).resolves.toHaveProperty('id', expect.any(String))
  })

  test('should the id property have a length of 4', async () => {
    const data = await store(Buffer.from('hello'))
    expect(data.id.length).toBe(4)
  })

})
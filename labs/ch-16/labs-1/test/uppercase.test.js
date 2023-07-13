const { test, describe } = require('@jest/globals');
const uppercase = require('../uppercase');

describe('#uppercase function', () => {
  test('should throw when input is not a string', () => {
    expect(() => uppercase(5)).toThrow('input must be a string')
    expect(() => uppercase({})).toThrow('input must be a string')
    expect(() => uppercase(null)).toThrow('input must be a string')
    expect(() => uppercase(undefined)).toThrow('input must be a string')
  })

  test('should return a string', () => {
    expect(typeof uppercase('hello')).toBe('string')
  })

  test('should uppercase input', () => {
    expect(uppercase('hello')).toBe('HELLO')
  })
})
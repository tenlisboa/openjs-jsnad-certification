const assert = require('assert')

// TODO:
// implement a way to create a prototype chain
function Leopard(name) {
  this.name = name
}

Leopard.prototype.hiss = function () {
  console.log(this.name + ': hiss')
}

function Lynx(name) {
  this.name = name
}

Lynx.prototype = Object.create(Leopard.prototype)

Lynx.prototype.purr = function () {
  console.log(this.name + ': purr')
}

function Cat(name) {
  this.name = name + ' the cat'
}

Cat.prototype = Object.create(Lynx.prototype)

Cat.prototype.meow = function () {
  console.log(this.name + ': meow')
}
// of leopard -> lynx -> cat
// leopard prototype must have ONLY a hiss method
// lynx prototype must have ONLY a purr method
// cat prototype must have ONLY a meow method

const felix = new Cat("Felix") //TODO replace null with instantiation of a cat
felix.meow() // prints Felix the cat: meow
felix.purr() // prints Felix the cat: prrr
felix.hiss() // prints Felix the cat: hsss

// prototype checks, do not remove
const felixProto = Object.getPrototypeOf(felix)
const felixProtoProto = Object.getPrototypeOf(felixProto)
const felixProtoProtoProto = Object.getPrototypeOf(felixProtoProto)

assert(Object.getOwnPropertyNames(felixProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(typeof felixProto.meow, 'function')
assert(typeof felixProtoProto.purr, 'function')
assert(typeof felixProtoProtoProto.hiss, 'function')
console.log('prototype checks passed!')

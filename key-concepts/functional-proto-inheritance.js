// @ts-nocheck
const wolf = {
  howl: function () { console.log(this.name + ': awoooooooo') }
}

const dog = Object.create(wolf, {
  woof: { value: function() { console.log(this.name + ': woof') } }
})

function createDog (name) {
  return Object.create(dog, {
    name: {value: name + ' the dog'}
  })
}

const rufus = createDog('Rufus')

rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"

// The prototype of an object can be inspected with Object.getPrototypeOf:

console.log(Object.getPrototypeOf(rufus) === dog) //true
console.log(Object.getPrototypeOf(dog) === wolf) //true

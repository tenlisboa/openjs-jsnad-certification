# Data Types

## Primitives

Those primitives are:
- undefined
- null
- boolean
- number
- string
- bigint
- symbol

Everything else is an object.

### Null and Undefined

The `null` value is to define the abstence of a object, while `undefined` is to define the absence of a value.
- Function with a void return, returns `undefined`
- Non-existing properties of objects returns `undefined`
- A variable that was not initialized with a value returns `undefined`

### Numbers and Bigints

A Bigint has no limit of an integer value, while a number has a limit of 2^53 - 1, being negative as well.

### Strings

Strings and can be created with single quotes, double quotes, or backticks.

### Symbols

Symbols are unique data types, that can be used as keys for object properties.
the method `Symbol.for` can be used to create or get global symbols.

## Functions

Functions are first class citizens in JavaScript. A function is an object, and therefore a value that can be used like any other value.

When you are working with functions inside objects, it's important to know that the `this`keywork will refer to the object that the function was called, and not the object that the function was declared.

For Example:
```js
const anObj = {
  name: 'anObj',
  aFunc: function() { // created here
    console.log(this.name);
  }
}

const anotherObj = {
  name: 'anotherObj',
  aFunc: anObj.aFunc // referenced here
}

anObj.aFunc(); // anObj
anotherObj.aFunc(); // anotherObj
```

### Arrow Functions, Lambda functions

The lambda functions does not have a `this` context for themselves, when inside this kind of functions, the `this` will refer to the nearest parent non-lambda function.

```js
function People(name) {
  this.name = name;
}

People.prototype.sayName = function() {
  const lambda = () => {
    console.log(this.name);
  }
  function nonLambda() {
    console.log(this.name);
  }

  lambda(); // People
  nonLambda(); // undefined
}

const people = new People('People');
people.sayName();
```

Lambda functions has no `prototype` property, and therefore cannot be used as constructors.

## Prototypal Inheritance (Functional)

Basically inheritance in JS is a chain of prototypes, where the child object will inherit the properties of the parent object.

```js
const wolf = {
  howl: function () { console.log(this.name + ': awoooooooo') }
}

const dog = Object.create(wolf, {
  woof: { value: function() { console.log(this.name + ': woof') } }
})

const rufus = Object.create(dog, {
  name: {value: 'Rufus the dog'}
})

rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"
```

One interesting thing is the `Object.getOwnPropertyDescriptor` function, which returns the property descriptor of a given property of an object.

```js
const wolf = {
  howl: function () { console.log(this.name + ': awoooooooo') }
}

const dog = Object.create(wolf, {
  woof: { value: function() { console.log(this.name + ': woof') } }
})

const rufus = Object.create(dog, {
  name: {value: 'Rufus the dog'}
})

console.log(Object.getOwnPropertyDescriptor(rufus, 'name'))
// prints { value: 'Rufus the dog', writable: false, enumerable: false, configurable: false }
```

So when `woof` is called in `rufus` the runtime will look for the property `woof` in `rufus`, if it does not find it, it will look for it in `rufus.__proto__` (which is `dog`), if it does not find it, it will look for it in `dog.__proto__` (which is `wolf`), and so on.

## Prototypal Inheritance (Contructor Functions)

```js
function Wolf (name) {
  this.name = name
}

Wolf.prototype.howl = function () {
  console.log(this.name + ': awoooooooo')
}

function Dog (name) {
  Wolf.call(this, name + ' the dog')
}

function inherit (proto) {
  function ChainLink(){}
  ChainLink.prototype = proto
  return new ChainLink()
}

Dog.prototype = inherit(Wolf.prototype)

Dog.prototype.woof = function () {
  console.log(this.name + ': woof')
}

const rufus = new Dog('Rufus')

rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"
```

There is a utility function from NodeJS called `util.inherits` that does the same thing as `inherit` above.

## Classical Inheritance (ES5)

```js
Prototypal Inheritance (Class-Syntax Constructors)
Modern JavaScript (EcmaScript 2015+) has a class keyword. It's important that this isn't confused with the class keyword in other Classical OOP languages.

The class keyword is syntactic sugar that actually creates a function. Specifically it creates a function that should be called with new. It creates a Constructor Function, the very same Constructor Function discussed in the previous section.



$ node -p



This is why it's deliberately referred to here as "Class-syntax Constructors", because the EcmaScript 2015 (ES6) class syntax does not in fact facilitate the creation of classes as they are traditionally understood in most other languages. It actually creates prototype chains to provide Prototypal Inheritance as opposed to Classical Inheritance.

The class syntax sugar does reduce boilerplate when creating a prototype chain:

class Wolf {
  constructor (name) {
    this.name = name
  }
  howl () { console.log(this.name + ': awoooooooo') }
}

class Dog extends Wolf {
  constructor(name) {
    super(name + ' the dog')
  }
  woof () { console.log(this.name + ': woof') }
}

const rufus = new Dog('Rufus')

rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"
```

One thing about classes is that it's only sugar syntax, that means that behind the scenes, it is using the prototype chain to create the inheritance. The same approach as the previous section.

## Clojure Scope

When a function is created, it's also create an invisible object called scope. Every variable, function, object, or anything that holds a value is created inside thin function, those will be stored in thin brand new object called scope.

This scope cannot be accessed outside, it's only accessible inside the function. This is called closure scope.

```js
function foo() {
  var bar = 'bar';

  function baz() {
    console.log(bar); // bar
  }

  baz();
}

foo();
```

But

```js
function foo() {
  var bar = 'bar';
}

console.log(bar); // ReferenceError
```

If a function is declared inside another function, the inner function has access to the outer function's scope. As shown in the previous example, baz() has access to foo()'s scope.

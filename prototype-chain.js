/**
 * This is an example of prototype chain and how it works in JavaScript
 */

// // Create a constructor function
// function Animal(name) {
//   this.name = name;
// }

// // Add a method to the constructor function
// Animal.prototype.walk = function() {
//   console.log(this.name + ' is walking.');
// }

// // Create a new object using the constructor function
// var animal = new Animal('Lion');
// animal.walk();

// // The chain is like this:
// // animal -> Animal.prototype -> Object.prototype -> null
// let proto = animal;
// while(proto !== null) {
//   console.log(proto);
//   proto = Object.getPrototypeOf(proto);
// }

// When you hit a method or property on an object,
// JavaScript will first look for it on the object itself.
// If it doesn't find it, it will look on the object's prototype.
// If it doesn't find it there, it will look on the prototype's prototype.
// And so on, until it reaches the end of the prototype chain.
// If it doesn't find it anywhere, it will return undefined.

// It can be harmful for performance if you have a very long prototype chain.
// It's better to keep the chain as short as possible.

// You can use the hasOwnProperty() method to check if a property exists on an object.
// It will return true if the property exists on the object itself, and false if it doesn't.

{
  // Creating a big prototype chain
  let jsCodeString = '';
  for(let i = 0; i < 1000; i++) {

    // Create a constructor function
    jsCodeString += `function Animal${i}(name) {
      this.name = name;
    }\n\n`;

    // Add a method to the constructor function
    jsCodeString += `Animal${i}.prototype.walk = function() {
      console.log(this.name + ' is walking.');
    }\n\n`;

    // Create a new object using the constructor function
    jsCodeString += `var animal${i} = new Animal${i}('Lion');\n\n`;
  }

  jsCodeString += `
  console.time('animal999_some');
  animal999.some;
  console.timeEnd('animal999_some');

  console.time('animal999_hasOwnProperty');
  animal999.hasOwnProperty('some');
  console.timeEnd('animal999_hasOwnProperty');
  `;

  eval(jsCodeString); // Strongly discouraged, test purposes only

  // animal999_some: 0.051ms
  // animal999_hasOwnProperty: 0.004ms
}

## Throwing 

You can throw everything in JS, but the recommendation is to throw only objects that derive from the native error object.

## Native Error Constructors

There are more error constructors than only Error, these are:
- EvalError
- SyntaxError
- RangeError
- ReferenceError
- TypeError
- URIError

## Try/Catch

Try/Catch will not get an exceptions thrown inside a callback function that executes later on the code. When dealing with that, it recommended to move the try/catch block to inside the function.

## Rejections

A throw that happens inside a promise handler like a `then` will become a rejection and can be caught in `catch`

### async-await try/catch is a syntax sugar

## Propagation

Event in Async/Await approaches and in Synchronous execution, if you want to propagate an error is simply rethrow it.
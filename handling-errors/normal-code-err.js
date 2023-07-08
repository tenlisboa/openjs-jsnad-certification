function OddError(varName) {
  this.name = 'OddError';
  this.message = varName + ' must be even';
  this.code = 'ERR_MUST_BE_EVEN';
  this.stack = (new Error()).stack;
}

OddError.prototype = Object.create(Error.prototype);

function doTast(amount) {
  if (typeof amount !== 'number') throw new TypeError('amount must be a number');
  if (amount <= 0) throw new RangeError('amount must be greater than zero');
  if (amount % 2) throw new OddError('amount');

  return amount / 2;
}

try {
  const result = doTast(3);
  console.log('result', result);
} catch (error) {
  console.error("error caught: ", error);
}
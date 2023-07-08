function OddError(varName) {
  this.name = 'OddError';
  this.message = varName + ' must be even';
  this.code = 'ERR_MUST_BE_EVEN';
  this.stack = (new Error()).stack;
}

OddError.prototype = Object.create(Error.prototype);

function doTast(amount) {
  return new Promise((resolve, reject) => {
    if (typeof amount !== 'number') reject(new TypeError('amount must be a number'));
    if (amount <= 0) reject(new RangeError('amount must be greater than zero'));
    if (amount % 2) reject(new OddError('amount'));
    resolve(amount / 2);
  });
}

doTast(3)
  .then(result => console.log('result', result))
  .catch((err) => {
    if (err.code === 'ERR_AMOUNT_MUST_BE_NUMBER') {
      console.error('wrong type')
    } else if (err.code === 'ERRO_AMOUNT_MUST_EXCEED_ZERO') {
      console.error('out of range')
    } else if (err.code === 'ERR_MUST_BE_EVEN') {
      console.error('cannot be odd')
    } else {
      console.error('Unknown error', err)
    }
  })
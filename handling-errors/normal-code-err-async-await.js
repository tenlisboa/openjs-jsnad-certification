function OddError(varName) {
  this.name = 'OddError';
  this.message = varName + ' must be even';
  this.code = 'ERR_MUST_BE_EVEN';
  this.stack = (new Error()).stack;
}

OddError.prototype = Object.create(Error.prototype);

async function doTast(amount) {
  if (typeof amount !== 'number') throw new TypeError('amount must be a number');
  if (amount <= 0) throw new RangeError('amount must be greater than zero');
  if (amount % 2) throw new OddError('amount');

  return amount / 2;
}

async function run() {
  try {
    const result = await doTast(3);
    console.log('result', result);
  } catch (error) {
    if (error.code === 'ERR_AMOUNT_MUST_BE_NUMBER') {
      console.error('wrong type')
    } else if (error.code === 'ERRO_AMOUNT_MUST_EXCEED_ZERO') {
      console.error('out of range')
    } else if (error.code === 'ERR_MUST_BE_EVEN') {
      console.error('cannot be odd')
    } else {
      console.error('Unknown error', error)
    }
  }  
}

run()
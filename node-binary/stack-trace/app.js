function f (n=99){
  if (n === 0) {
    throw new Error('Boom!');
  }
  f(n - 1);
}

f();

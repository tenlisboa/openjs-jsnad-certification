const { setImmediate } = require('timers')

{
  console.time('no-partitioning')
  let n = 10000000
  let sum = 0
  // Not partitioned
  for (let i = 0; i < n; i++) {
    sum += i
  }
  let avg = sum / n
  console.log(avg)
  console.timeEnd('no-partitioning')
}

{
  let sum, n
  n = 10000000

  function asyncAvg(n, avgCb) {
    sum = 0

    function sumUp(i, cb) {
      sum += i;
      if (i == n) {
        cb(sum)
        return
      }

      setImmediate(sumUp.bind(null, i + 1, cb))
    }

    sumUp(1, function (sum) {
      let avg = sum / n
      avgCb(avg)
    })
  }

  console.time('partitioning')
  asyncAvg(n, function (avg) {
    console.log(avg)
    console.timeEnd('partitioning')
  })
}

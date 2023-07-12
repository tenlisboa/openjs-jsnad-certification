'use strict'
const stats = [{
  ...process.memoryUsage(),
  swapUsage: 0
}]

let iterations = 5

while (iterations--) {
  const arr = []
  let i = 10000
  // make the CPU do some work:
  while (i--) {
    arr.push({[Math.random()]: Math.random()})
  }
  const memoUsage = process.memoryUsage()

  const ssrGrow = memoUsage.rss - stats[stats.length - 1].rss
  const heapGrow = memoUsage.heapUsed - stats[stats.length - 1].heapUsed
  const swapUsage = heapGrow > ssrGrow ? heapGrow - ssrGrow : 0

  stats.push({
    ...memoUsage,
    swapUsage
  })
}

console.table(stats)


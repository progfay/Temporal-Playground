import c from 'console'
const console = new c.Console({
  stdout: process.stdout,
  stderr: process.stderr,
  groupIndentation: 4
});

import pkg from 'proposal-temporal'
const { Temporal } = pkg

console.group('Temporal.Date.from')

const [year, month, day] = [20000, 1000000,10000]

console.group(`Temporal.Date.from('${year}-${month}-${day}')`)
try {
  const date = Temporal.Date.from(`${year}-${month}-${day}`)
  console.log(date)
} catch (e) {
  console.error(e)
}
console.groupEnd(`Temporal.Date.from('${year}-${month}-${day}')`)

console.group(`Temporal.Date.from({ year: ${year}, month: ${month}, day: ${day} })`)
try {
  const date = Temporal.Date.from({ year, month, day })
  console.log(date)
} catch (e) {
  console.error(e)
}
console.groupEnd(`Temporal.Date.from({ year: ${year}, month: ${month}, day: ${day} })`)

console.groupEnd('Temporal.Date.from')

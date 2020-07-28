import c from 'console'
import pkg from 'proposal-temporal'

const console = new c.Console({
  stdout: process.stdout,
  stderr: process.stderr,
  groupIndentation: 4
})

const { Temporal } = pkg

console.group('Temporal.Date.from')

for (const [year, month, day] of [[2000, 13, 32], [20000, 100, 100]]) {
  console.group(`Temporal.Date.from('${year}-${month}-${day}')`)
  try {
    const date = Temporal.Date.from(`${year}-${month}-${day}`)
    console.log(date)
  } catch (e) {
    console.error(e.message)
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
}

console.groupEnd('Temporal.Date.from')

## Temporal Playground

package info: [`proposal-temporal@0.3.0`](https://www.npmjs.com/package/proposal-temporal/v/0.3.0)

```
Temporal.Date.from
    Temporal.Date.from('2000-13-32')
        Temporal.Date <2000-12-31>
    Temporal.Date.from({ year: 2000, month: 13, day: 32 })
        Temporal.Date <2000-12-31>
    Temporal.Date.from('20000-100-100')
        invalid ISO 8601 string: 20000-100-100
    Temporal.Date.from({ year: 20000, month: 100, day: 100 })
        Temporal.Date <+020000-12-31>
```


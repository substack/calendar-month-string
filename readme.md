# calendar-month-text

generate text calendars showing a single month

# example

``` js
var calendar = require('calendar-month-text')
var txt = calendar()
console.log(txt)
```

output:

```
     June 2016
Su Mo Tu We Th Fr Sa
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30      
```

You can color the dates with ansi codes:

``` js
var calendar = require('calendar-month-text')
var txt = calendar(new Date('june 2016'), {
  colors: {
    7: 'bg red fg yellow',
    14: 'bg red fg yellow',
    21: 'bg red fg yellow',
    28: 'bg red fg yellow',
    9: 'bg cyan fg blue',
    16: 'bg cyan fg blue',
    23: 'bg magenta',
    30: 'bg cyan fg blue'
  }
})
console.log(txt)
```

# api

``` js
var calendar = require('calendar-month-text')
```

## var txt = calendar(date, opts)

Return a calendar string `txt` for the month given in `date`, a date string or
`Date` instance.

* `opts.colors` - map of calendar dates to [fuzzy ansi color strings][1].
The string `'current'` maps to the value of `date.getDate()`.

The default value for `opts.colors` is: `{ current: 'reverse' }`

[1]: https://npmjs.com/package/fuzzy-ansi-color

# license

BSD

# install

```
npm install calendar-month-text
```

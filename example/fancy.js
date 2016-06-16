var calendar = require('../')
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

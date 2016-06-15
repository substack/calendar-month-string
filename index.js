var sprintf = require('sprintf')
var strftime = require('strftime')

var label = (function () {
  var days = []
  var d = new Date('1995-01-01 00:00:00')
  for (var i = 1; i <= 7; i++) {
    d.setDate(i)
    days.push(strftime('%a', d).substr(0,2))
  }
  return days.join(' ')
})()

module.exports = function (date) {
  var first = new Date(date)
  first.setHours(0)
  first.setMinutes(0)
  first.setSeconds(0)
  first.setDate(1)

  var last = new Date(date)
  last.setHours(0)
  last.setMinutes(0)
  last.setSeconds(0)
  last.setMonth(last.getMonth()+1)
  last.setDate(0)

  var weeks = Math.ceil((last.getDate() + first.getDay()) / 7)
  var day = 1 - first.getDay()
  var lines = []
  lines.push(center(strftime('%B %Y', date), 20))
  lines.push(label)

  for (var w = 0; w < weeks; w++) {
    var row = []
    for (var d = 0; d < 7; d++) {
      var x = d + day
      row.push(d + day)
    }
    day += 7
    lines.push(row.map(function (day) {
      if (day <= 0) return '  '
      else if (day > last.getDate()) return '  '
      else if (date.getDate() === day) {
        return sprintf('\x1b[7m%2d\x1b[0m', day)
      } else return sprintf('%2d', day)
    }).join(' '))
  }
  return lines.join('\n')
}

function center (str, n) {
  var i = Math.floor(Math.max(0, n - str.length)/2)+1
  return Array(i).join(' ') + str
}

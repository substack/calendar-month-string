var sprintf = require('sprintf')
var strftime = require('strftime')

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
  lines.push('Su Mo Tu We Th Fr Sa')

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
      else return sprintf('%2d', day)
    }).join(' '))
  }
  return lines.join('\n')
}

function center (str, n) {
  var i = Math.floor(Math.max(0, n - str.length)/2)+1
  return Array(i).join(' ') + str
}

var calendar = require('../')
var test = require('tape')
var fs = require('fs')
var path = require('path')

var file = path.join(__dirname, 'files/cal/expected.txt')
var expected = fs.readFileSync(file, 'utf8').replace(/\n+$/,'')

test('calendar', function (t) {
  var txt = calendar(new Date('1995-01-01 00:00:00'))
  t.equal(trim(txt), trim(expected))
  t.end()
})

function trim (str) {
  return str.split(/\n/).map(function (line) {
    return line.replace(/\s+$/,'')
  }).join('\n')
}

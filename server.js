var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(require('./controllers'))

var server = app.listen(3000, function () {
  console.log('Server listening on %d', server.address().port)
})


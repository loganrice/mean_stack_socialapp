var express = require('express')
var bodyParser = require('body-parser')


var app = express()
app.use('/api/posts', require('./controllers/api/posts'))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendfile('layouts/posts.html')
})

app.listen(3000, function () {
  console.log('Server listening on', 3000)
})


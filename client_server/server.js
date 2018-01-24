var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var request = require('superagent')

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Backend Ninja app listening at http://%s:%s", host, port)
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.send('Backend Ninja App - Client Facing Server')
})

app.get('/signup', function (req, res) {
  request.post('localhost:8081/signup_oper').query({username: 'a@b.com', password: 'abc'}).end((err,res) => {
  })
  res.send('successful')
})

app.post('/login', function (req, res) {
  //
})

app.post('/logout', function (req, res) {
  //
})

app.post('/createnote', function (req, res) {
  //
})

app.post('/getnote', function (req, res) {
  //
})

app.post('/listnote', function (req, res) {
  //
})

app.post('/modifynote', function (req, res) {
  //
})

app.post('/deletenote', function (req, res) {
  //
})

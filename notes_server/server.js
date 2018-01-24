var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var mongo = require('mongodb')
var monk = require('monk')
var app = express()
var db_user = monk('localhost:27017/backend-ninja')

var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Backend Ninja app listening at http://%s:%s", host, port)
})

app.get('/', function (req, res) {
  res.send('Backend Ninja App - Notes Server')
})

app.get('/create_note', function (req, res) {
  // Save contents of the note to the db along with username
})

app.get('/list_note', function (req, res) {
  // Return all the notes matching that username with noteId and title
})

app.get('/get_note', function (req, res) {
  // Return all details of the requested note if username matches
})

app.get('/modify_note', function (req, res) {
  // Update the requested note with modified info if username matches
})

app.post ('/delete_note', function (req, res) {
  // Delete the requested noteId if username matches
})

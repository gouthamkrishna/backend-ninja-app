var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var mongo = require('mongodb').MongoClient
var app = express()
var url = 'mongodb://localhost:27017/backend-ninja'

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Backend Ninja app listening at http://%s:%s", host, port)
})

app.get('/', function (req, res) {
  res.send('Backend Ninja App - Uers Details Server')
})

app.post('/login_oper', function (req, res) {
  // Return username and password from db as login credentials
})

app.post('/signup_oper', function (req, res) {
  // check for existing username and add username, email, firstname, lastname, password to db
  var username = req.query.username
  mongo.connect(url, function(err,client) {
    const db = client.db('backend-ninja')
    db.collection('usercollection').findOne({username: username},function(err, result) {
      if (result == null) {
        // insertion code
        db.collection('usercollection').insert({'username': req.query.username , 'password': req.query.password})
        res.send({'response' : 'Signup successfull'})
      } else {
        // username already exists
        res.send({'response' : 'User already exists'})
      }
    })
  })
})

app.post('/getuserdetails', function (req, res) {
  // Return all details of the requested username from db
})

app.post('/modifyuserdetails', function (req, res) {
  // Modify details of the requested username in db
})

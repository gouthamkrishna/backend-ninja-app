var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var monk = require('monk');
var app = express();
var db = monk('localhost:27017/backend-ninja');
var collection = db.get('usercollection');

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Backend Ninja app listening at http://%s:%s", host, port)
})

app.get('/', function (req, res) {
  res.send('Backend Ninja App - Uers Details Server');
})

app.post('/login_oper', function (req, res) {
  // Return username and password from db as login credentials
})

app.post('/signup_oper', function (req, res) {
  // check for existing username and add username, email, firstname, lastname, password to db
  var username = req.body.username;
  collection.findOne({username: username}).then((doc) => {
    if (doc.length !== 0) {
      // insertion code
    } else {
      // username already exists
    }
  })
})

app.post('/getuserdetails', function (req, res) {
  // Return all details of the requested username from db
})

app.post('/modifyuserdetails', function (req, res) {
  // Modify details of the requested username in db
})

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

app.use(express.static('assets'));
app.use(bodyParser.json());

var messages = [];

app.get('/api/messages', function (req, res, next) {
  res.status(200).json({ messages: messages })
});

app.post('/api/messages', function(req, res, next) {
  var newMessage = {
    message: req.body.message,
    time: new Date()
    }
  messages.push(newMessage);
  res.status(200).json({messages: messages})
});



app.listen(port, function() {
  console.log('Listening on ' + port);
});
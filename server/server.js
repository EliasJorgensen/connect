'use strict'; // Use strict mode for better performance and feature support

// import requirements
var express   = require('express'),
    socketio  = require('socket.io'),
    config    = require('./config.json');

module.exports = function (PORT) {

  var app = express();

  // send index.html file on index
  app.get('/', function (req, res) {
    res.sendfile(__dirname + '../dist/index.html');
  });

  // load assets (js etc.) from dist folder
  app.use(express.static('../dist'));


  // start server
  app.listen(PORT, function (err, res) {
    if (err) {
      console.warn("Error on Express.listen :", err);
    }

    console.log('Backend is listening on port', PORT);
  });
}

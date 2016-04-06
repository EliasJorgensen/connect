'use strict'; // Use strict mode for better performance and feature support

// import requirements
var express = require('express'),
    path    = require('path'),
    config  = require('./config.json');

module.exports = function (PORT) {

  /*------------------ Express.js code ------------------*/
  var app = express(); // create server instance
  app.use('/', express.static(path.join(__dirname, '../dist'))); // serve dist folder

  var server = app.listen(PORT, function (err) {
    if (err) {
      console.log('Problem with starting HTTP server', err);
    } else {
      console.log('Server listening on port:', PORT);
    }
  });


  /*------------------ Socket.io code ------------------*/
  // start websocket server
  var io = require('socket.io')(server, { path: '/api' });

  io.on('connection', function (socket) {
    console.log('User connected');
  });


  // io.on('connection', function (data) {
  //   data.emit('message', { message: 'welcome to the chat' });
  //
  //   data.on('send', function (data) {
  //       io.emit('message', data);
  //   });
  // });
}

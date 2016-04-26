'use strict'; // Use strict mode for better performance and feature support

// import requirements
var express  = require('express'),
    path     = require('path'),
    socketio = require('socket.io'),
    utils    = require('./utils');

module.exports = function (PORT) {

  /*------------------ Express.js code ------------------*/
  var app = express(); // create server instance
  app.use('/', express.static(path.join(__dirname, '../dist'))); // serve dist folder

  // handle unknown route
  app.get('*', function (req, res) {
    res.send('Sorry mate, you got the 404');
  });

  var server = app.listen(PORT, function (err) {
    if (err) {
      console.log('Problem with starting HTTP server', err);
    } else {
      console.log('Server listening on port:', PORT);
    }
  });


  /*------------------ Socket.io code ------------------*/
  // start websocket server
  var io = socketio(server, { path: '/api' });

  // dummy room object for testing purposes
  var rooms = {
    testroom: {
      users: [
        "Elias",
        "Aksel",
      ]
    }
  };

  io.on('connection', function(socket) {
      console.info('New client connected (id=' + socket.id + ').');
      socket.emit('welcome', "Connected to socket server")

      // let user check for reserved rooms
      socket.on('roomCheck', function (room, cb) {
        room = room.toLowerCase();

        if (room in rooms) {
          cb(true);
        } else {
          cb(false);
        }
      });

      // let user check for reserved nicknameReserved
      socket.on('nicknameCheck', function (name, room, cb) {
        // if room doesn't exist, nickname is free to use
        if (!(room in rooms)) { cb(false); return; }

        if (utils.searchArrayLowerCase(rooms[room]["users"], name)) {
          cb(true);
        } else {
          cb(false);
        }
      });

      // When socket disconnects, remove it from the list:
      socket.on('disconnect', function() {
          console.info('Client gone (id=' + socket.id + ').');
      });
  });

}

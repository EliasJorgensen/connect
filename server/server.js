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

  // object structure visualization
  let rooms = {
    testroom: {
      users: [
        "Elias",
        "Aksel",
      ]
    }
  };

  // our local 'database' of rooms and users
  //let rooms = {};

  io.on('connection', function(socket) {
      console.log("Socket connected: " + socket.id);

      // listen for actions emitted by Client
      socket.on('action', (action) => {
        console.log(action);

        if (action.type === 'api/roomCheck') {
          let room = action.room.toLowerCase();
          let value;

          if (room in rooms) {
            value = true;
          } else {
            value = false;
          }
          // emit value back to client
          console.log("Checking Room: ", value);
          socket.emit('action', {type: 'SET_ROOM_RESERVED', value: value});
        }

        else if (action.type === 'api/nicknameCheck') {
          let room = action.room.toLowerCase();
          let name = action.name;
          let value;

          // if room doesn't exist, nickname is free to use
          if (!(room in rooms)) {
            socket.emit('action', {type: 'SET_NICKNAME_RESERVED', value: false});
            return;
          }

          if (utils.searchArrayLowerCase(rooms[room]["users"], name)) {
            value = true;
          } else {
            value = false;
          }

          // emit value back to client
          console.log("Checking Nickname: ", value);
          socket.emit('action', {type: 'SET_NICKNAME_RESERVED', value: value});
        }

      });


      // When socket disconnects, remove it from the list:
      socket.on('disconnect', function() {
          console.info('Client gone (id=' + socket.id + ').');
      });
  });

}

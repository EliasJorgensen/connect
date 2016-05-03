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
        {
          nickname: "Elias",
          uuid: "110ec58a-a0f2-4ac4-8393-c866d813b8d1",
          socketId: "/#7B_0VrosURHjPUdoAAAA"
        },
        {
          nickname: "Aksel",
          uuid: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
          socketId: "/#l8nmJ7ngR6UYznDEAAAC"
        }
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
          let room = action.room;
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

        // check if nickname is available in room
        else if (action.type === 'api/nicknameCheck') {
          let room     = action.room;
          let nickname = action.nickname;
          let value;

          // if room doesn't exist, nickname is free to use
          if (!(room in rooms)) {
            socket.emit('action', {type: 'SET_NICKNAME_RESERVED', value: false});
            return;
          }

          if (utils.searchArrayLowerCase(rooms[room]["users"], nickname)) {
            value = true;
          } else {
            value = false;
          }

          // emit value back to client
          console.log("Checking Nickname: ", value);
          socket.emit('action', {type: 'SET_NICKNAME_RESERVED', value: value});
        }

        // join room and create it if needed
        else if (action.type === 'api/joinRoom') {
          let room      = action.room;
          let nickname  = action.nickname;
          let uuid      = action.id;

          // if room exists, join room
          if (room in rooms) {
            // notify other users in room
            for (let i in rooms[room]['users']) {
              let id = rooms[room]['users'][i]['socketId'];
              socket.broadcast.to(id).emit('action',
                    {type: 'ADD_USER_TO_ROOM', nickname: nickname, uuid: uuid});
            }

            // add user to local database
            rooms[room]['users'].push({nickname: nickname, uuid: uuid, socketId: socket.id});
            console.log('Users in selected room are: \n', rooms[room]['users']);
          }

          // if it doesn't create one
          else {
            rooms[room] = {};
            rooms[room]['users'] = [];
            rooms[room]['users'].push({nickname: nickname, uuid: uuid, socketId: socket.id});
            console.log('Users in selected room are: \n', rooms[room]['users']);
          }
        }

      });


      // When socket disconnects, remove it from the list:
      socket.on('disconnect', function() {
          console.info('Client gone (id=' + socket.id + ').');
      });
  });

}

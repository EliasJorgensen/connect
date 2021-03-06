'use strict'; // Use strict mode for better performance and feature support

// import requirements
let express  = require('express'),
    path     = require('path'),
    socketio = require('socket.io'),
    utils    = require('./utils');

module.exports = function (PORT) {

  /*------------------ Express.js code ------------------*/
  let app = express(); // create server instance
  app.use('/', express.static(path.join(__dirname, '../dist'))); // serve dist folder

  // handle unknown route
  app.get('*', function (req, res) {
    res.send('Sorry mate, you got the 404');
  });

  let server = app.listen(PORT, function (err) {
    if (err) {
      console.log('Problem with starting HTTP server', err);
    } else {
      console.log('Server listening on port:', PORT);
    }
  });


  /*------------------ Socket.io code ------------------*/
  // start websocket server
  let io = socketio(server, { path: '/api' });

  // object structure visualization
  // let rooms = {
  //   testroom: {
  //     users: [
  //       {
  //         nickname: "Elias",
  //         id: "110ec58a-a0f2-4ac4-8393-c866d813b8d1",
  //         socketId: "/#7B_0VrosURHjPUdoAAAA"
  //       },
  //       {
  //         nickname: "Aksel",
  //         id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
  //         socketId: "/#l8nmJ7ngR6UYznDEAAAC"
  //       }
  //     ]
  //   }
  // };

  // our local 'database' of rooms and users
  let rooms = {};

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
          let uuid        = action.id; // UUID not socketId

          // if room exists, join room
          if (room in rooms) {
            // notify other users in room, and send userlist to connecting user
            for (let i in rooms[room]['users']) {
              let id = rooms[room]['users'][i]['socketId'];

              // notify users in chatroom
              socket.broadcast.to(id).emit('action',
                    {type: 'ADD_USER_TO_ROOM', nickname: nickname, id: uuid});

              // send userlist to connecting user
              socket.emit('action', {type: 'ADD_USER_TO_ROOM',
                    nickname: rooms[room]['users'][i]['nickname'],
                    id: rooms[room]['users'][i]['id']});
            }

            // add user to local database
            rooms[room]['users'].push({nickname: nickname, id: uuid, socketId: socket.id});
            console.log('Users in selected room are: \n', rooms[room]['users']);
          }

          // if it doesn't, create one
          else {
            rooms[room] = {}; // room is an object
            rooms[room]['users'] = []; // 'users' is an array
            rooms[room]['users'].push({nickname: nickname, id: uuid, socketId: socket.id}); // add user to array
            console.log('Users in selected room are: \n', rooms[room]['users']);
          }
        }

        // if a user sends a message
        else if (action.type === 'api/sendMessage') {
          let socketId = socket.id;
          console.log(action.room);
          let users = rooms[action.room]['users'];

          for (let i in users) {
            let userId = users[i]['socketId'];
            // only send the message to the other users, as
            // the user sending the message is also a part
            // of the users array
            if (socketId === userId) {continue;}

            console.log("Message: ", action.message, " - sent to: ", userId);
            socket.broadcast.to(userId).emit('action', {type: 'RECEIVE_MESSAGE',
                  message: action.message});
          }
        }

      });


      // When socket disconnects, remove it from the room.
      // If disconnecting user is the last one in the room, delete it.
      socket.on('disconnect', function() {
          console.info('Client gone (id=' + socket.id + ').');

          let user;

          // find out what room the user is in.
          for (let i in rooms) {
            // if disconnecting user has been found and removed,
            // stop searching rooms
            if (typeof user !== 'undefined') {break;}

            for (let j in rooms[i]['users']) {

              if (rooms[i]['users'][j]['socketId'] === socket.id) {
                console.log("Removing user with socket ID ", socket.id);

                // save the disconnect user of the room
                user = rooms[i]['users'][j];
                console.log("Disconnecting user: ", user);

                // notify other users in the room, that a user is disconneting
                for (let k in rooms[i]['users']) {
                  let userId = rooms[i]['users'][k]['socketId'];
                  // skip the disconneting user
                  if (socket.id === userId) {continue;}

                  socket.broadcast.to(userId).emit('action',
                  {type: 'REMOVE_USER_FROM_ROOM', id: user.id});
                }

                // now delete the user from the room
                let userIndex = j; // the index of our 'users' loop
                rooms[i]['users'].splice(userIndex, 1);
                console.log("Remaining users in room: ", rooms[i]['users']);

                // if disconnecting user was the last one in the room, delete the room
                if (Object.keys(rooms[i]['users']).length  === 0) {
                  console.log("Deleting room: ", rooms[i]);
                  delete rooms[i];
                }

                console.log("Rooms: ", rooms);
              }

            }
          }

      });
  });

}

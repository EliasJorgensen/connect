import * as types from 'constants/actionTypes.js';
import io from 'socket.io-client';

/*------------------ Socket Listeners and Initializers ------------------*/
const socket = io.connect({ path: '/api' });
// listen for welcome message
socket.on("welcome", (message) => {
  console.info(message);
});


/*------------------ Async action creators ------------------*/

export function asyncCheckRoom (room) {
  return (dispatch) => {
    socket.emit('roomCheck', room, function (bool) {
      console.info('Room ' + room + " returned: " + bool);
      dispatch(checkRoom(bool));
    });
  }
}

/*------------------ Synchronous action creators ------------------*/
export function updateRoom (room) {
  return { type: types.UPDATE_ROOM, room: room };
}

export function setRoomError (bool) {
    return { type: types.SET_ROOM_ERROR, value: bool };
}

export function checkRoom (bool) {
  return { type: types.SET_ROOM_RESERVED, value: bool };
}

export function updateNickname (nickname) {
  return { type: types.UPDATE_NICKNAME, nickname: nickname };
}

export function setNicknameError (bool) {
  return { type: types.SET_NICKNAME_ERROR, value: bool };
}

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
  // when room is empty, room is NOT reserved
  if (!room) {
    return (dispatch) => {
      dispatch(checkRoom(false));
    }
  }

  return (dispatch) => {
    socket.emit('roomCheck', room, function (bool) {
      console.info('Room ' + room + " returned: " + bool);
      dispatch(checkRoom(bool));
    });
  }
}

export function asyncCheckNickname (nickname, room) {
  // when nickname or room is empty, nickname is NOT in use
  if (!nickname || !room) {
    return (dispatch) => {
      dispatch(checkNickname(false));
    }
  }

  return (dispatch) => {
    socket.emit('nicknameCheck', nickname, room, function (bool) {
      console.info('Nickname ' + nickname + " in room " + room + " returned: " + bool);
      dispatch(checkNickname(bool));
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

export function setNicknameDisabled (bool) {
  return { type: types.SET_NICKNAME_DISABLED, value: bool };
}

export function checkNickname (bool) {
  return { type: types.SET_NICKNAME_RESERVED, value: bool };
}

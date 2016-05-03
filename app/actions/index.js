import * as types from 'constants/actionTypes.js';

/*------------------ Async action creators ------------------*/

export function asyncCheckRoom (room) {
  // when room is empty, room is NOT reserved
  if (!room) {
    return (dispatch) => {
      dispatch({type: 'SET_ROOM_RESERVED', value: false});
    }
  }

  return (dispatch) => {
    console.info('Room is: ', room);
    dispatch({type: 'api/roomCheck', room: room});
  }
}

export function asyncCheckNickname (nickname, room) {
  // when nickname or room is empty, nickname is NOT in use
  if (!nickname || !room) {
    return (dispatch) => {
      dispatch({type: 'SET_NICKNAME_RESERVED', value: false});
    }
  }

  return (dispatch) => {
    console.info('Nickname ' + nickname + " in room " + room);
    dispatch({type: 'api/nicknameCheck', room: room, name: nickname});
  }
}

/*------------------ Synchronous action creators ------------------*/
export function updateRoom (room) {
  return { type: types.UPDATE_ROOM, room: room };
}

export function setRoomError (bool) {
  return { type: types.SET_ROOM_ERROR, value: bool };
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

import * as types from 'constants/actionTypes.js';
import { push } from 'react-router-redux';
import uuid from 'uuid';

/*------------------ Async action creators ------------------*/

// checks server for reserved room
export function asyncCheckRoom (room) {
  // when room is empty, room is NOT reserved
  if (!room) {
    return (dispatch) => {
      dispatch({type: 'SET_ROOM_RESERVED', value: false});
    }
  }

  room = room.toLowerCase();

  return (dispatch) => {
    console.info('Room is: ', room);
    dispatch({type: 'api/roomCheck', room: room});
  }
}

// checks server for reserved nickname in given room
export function asyncCheckNickname (nickname, room) {
  // when nickname or room is empty, nickname is NOT in use
  if (!nickname || !room) {
    return (dispatch) => {
      dispatch({type: 'SET_NICKNAME_RESERVED', value: false});
    }
  }

  room = room.toLowerCase();

  return (dispatch) => {
    console.info('Nickname ' + nickname + " in room " + room);
    dispatch({type: 'api/nicknameCheck', room: room, nickname: nickname});
  }
}

// join room
export function asyncJoinRoom (room, nickname) {
  room = room.toLowerCase();
  let id = uuid.v4(); // create unique identifier

  // join room, set the final nickname and push to room route
  return (dispatch) => {
    dispatch({type: 'api/joinRoom', room: room, nickname: nickname, id: id});
    dispatch({type: 'SET_ROOM_NICKNAME', nickname: nickname, id: id});
    dispatch(push('/room/' + room));
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

import * as types from 'constants/actionTypes.js';

export function updateRoom (room) {
  return { type: types.UPDATE_ROOM, room: room };
}

export function updateNickname (nickname) {
  return { type: types.UPDATE_NICKNAME, nickname: nickname };
}

export function setRoomError (bool) {
    return { type: types.SET_ROOM_ERROR, value: bool };
}

export function setNicknameError (bool) {
  return { type: types.SET_NICKNAME_ERROR, value: bool };
}

import { UPDATE_NICKNAME, UPDATE_ROOM, SET_NICKNAME_ERROR, SET_ROOM_ERROR } from 'constants/actionTypes';

const initialState = {
  room:          '',
  nickname:      '',
  roomError:     false,
  nicknameError: false
};

export default function promptReducer(state = initialState, action) {
  switch(action.type) {

    case UPDATE_ROOM:
      return Object.assign({}, state, {
        room: action.room
      });

    case UPDATE_NICKNAME:
      return Object.assign({}, state, {
        nickname: action.nickname
      });

    case SET_ROOM_ERROR:
      return Object.assign({}, state, {
        roomError: action.value
      });

    case SET_NICKNAME_ERROR:
      return Object.assign({}, state, {
        nicknameError: action.value
      });

    default:
      return state;
  }
}

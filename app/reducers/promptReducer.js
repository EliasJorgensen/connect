import { UPDATE_NICKNAME, UPDATE_ROOM, SET_NICKNAME_ERROR, SET_ROOM_ERROR,
         SET_ROOM_RESERVED, SET_NICKNAME_RESERVED } from 'constants/actionTypes';

const initialState = {
  room:             '',
  nickname:         '',
  roomMissing:      false,
  roomReserved:     false,
  nicknameError:    false,
  nicknameReserved: false
};

export default function promptReducer(state = initialState, action) {
  switch(action.type) {

    case UPDATE_ROOM:
      return Object.assign({}, state, {
        room: action.room
      });

    case SET_ROOM_ERROR:
      return Object.assign({}, state, {
        roomError: action.value
      });

    case SET_ROOM_RESERVED:
      return Object.assign({}, state, {
        roomReserved: action.value
      });

    case UPDATE_NICKNAME:
      return Object.assign({}, state, {
        nickname: action.nickname
      });

    case SET_NICKNAME_ERROR:
      return Object.assign({}, state, {
        nicknameError: action.value
      });

    case SET_NICKNAME_RESERVED:
      return Object.assign({}, state, {
        nicknameReserved: action.value
      })

    default:
      return state;

  }
}

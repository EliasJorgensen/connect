import { UPDATE_NICKNAME, SEND_MESSAGE, SET_ROOM_NICKNAME } from 'constants/actionTypes';

const initialState = {
  nickname: {},
  messages: [],
  users: [],
  input: ''
};

export default function roomReducer(state = initialState, action) {
  switch(action.type) {

    case SET_ROOM_NICKNAME:
      console.info("Final nickname: ", action);
      return Object.assign({}, state, {
        nickname: action.nickname,
        id:       action.id
      });

    default:
      return state;

  }
}

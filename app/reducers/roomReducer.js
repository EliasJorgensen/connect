import { UPDATE_NICKNAME, SEND_MESSAGE } from 'constants/actionTypes';

const initialState = {
  messages: [],
  users: [],
  input: ''
};

export default function roomReducer(state = initialState, action) {
  switch(action.type) {

    case UPDATE_NICKNAME:
      return Object.assign({}, state, {
        room: action.nickname
      });

    default:
      return state;

  }
}

import { UPDATE_NICKNAME } from 'constants/actionTypes';

const initialState = {
  room:              '',
  nickname:          '',
  roomErrorText:     '',
  nicknameErrorText: ''
};

export default function promptState(state = initialState, action) {
  switch(action.type) {
    case UPDATE_NICKNAME:
      return Object.assign({}, state, {
        username: action.nickname
      });

    default:
      return state;
  }
}

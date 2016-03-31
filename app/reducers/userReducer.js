import { SAVE_USERNAME } from 'constants/actionTypes';

const initialState = {
  username: ''
};

export default function users(state = initialState, action) {
  switch(action.type) {
    case SAVE_USERNAME:
      return Object.assign({}, state, {
        username: action.username
      });

    default:
      return state;
  }
}

import { SET_ROOM_NICKNAME, ADD_USER_TO_ROOM, UPDATE_INPUT, RECEIVE_MESSAGE, REMOVE_USER_FROM_ROOM } from 'constants/actionTypes';

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
        nickname: {
          nickname: action.nickname,
          id:       action.id
        }
      });

    case ADD_USER_TO_ROOM:
      console.info("Adding user " + action.nickname + " to room.");
      console.info("State is: ", state);
      return Object.assign({}, state, {
        users: [
          ...state.users,
          {
            nickname: action.nickname,
            id:       action.id
          },
        ]
      });

    case UPDATE_INPUT:
      console.log("Input is: ", action.input);
      return Object.assign({}, state, {
        input: action.input
      });

    case RECEIVE_MESSAGE:
      console.log("Receiving message from: ", action.message.author);
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          action.message
        ]
      });

    case REMOVE_USER_FROM_ROOM:
      console.log("REMOVING USER", action);
      // find the index of the user with the provided ID
      let index = state.users.findIndex(prop => prop.id === action.id);
      console.log("Users", state.users);
      return Object.assign({}, state, {
        users: [
          ...state.users.slice(0, index),
          ...state.users.slice(index + 1)
        ]
      });

    default:
      return state;

  }
}

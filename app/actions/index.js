import * as types from 'constants/actionTypes.js';

export function updateUsername (username) {
  return { type: UPDATE_USERNAME, username: username };
}

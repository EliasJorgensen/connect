import { SAVE_USERNAME } from './actionTypes.js';

export saveFuelSettings (username) {
  return { type: SAVE_USERNAME, username: username };
}

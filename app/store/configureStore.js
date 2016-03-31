import { createStore } from 'redux';
import rootReducer from 'reducers';

export default function configureStore(initialState) {
  let store = createStore(rootReducer, initialState);

  return store;
};

import { combineReducers } from 'redux';

// import reducers
import promptState from './promptReducer';

const rootReducer = combineReducers({
  promptState
});

export default rootReducer;

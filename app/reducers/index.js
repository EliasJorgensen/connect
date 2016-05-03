import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// import reducers
import prompt from './promptReducer';
import room   from './roomReducer';

const rootReducer = combineReducers({
  prompt,
  room,
  routing
});

export default rootReducer;

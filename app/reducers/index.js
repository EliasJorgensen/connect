import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// import reducers
import prompt from './promptReducer';
import chat   from './chatReducer';

const rootReducer = combineReducers({
  prompt,
  routing
});

export default rootReducer;

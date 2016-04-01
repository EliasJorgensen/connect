import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// import reducers
import promptState from './promptReducer';

const rootReducer = combineReducers({
  promptState,
  routing
});

export default rootReducer;

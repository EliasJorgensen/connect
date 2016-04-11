import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

// import components
import Main from 'components/Main';
import PromptContainer from 'containers/PromptContainer';
import RoomContainer from 'containers/RoomContainer';

// import rootReducer
import rootReducer from 'reducers';

// create store from reducers and middleware
const middleware = applyMiddleware(routerMiddleware(browserHistory), thunk);
let store = createStore(rootReducer, middleware);

console.log('State of store is:', store.getState());

// create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// define routes
const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Main}>
        <IndexRoute component={PromptContainer} />
        <Route path='room/:id' component={RoomContainer} />
      </Route>
    </Router>
  </Provider>
);

export default routes;

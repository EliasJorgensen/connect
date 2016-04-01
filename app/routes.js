import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// import components
import Main from 'components/Main';
import PromptContainer from 'containers/PromptContainer';
import RoomContainer from 'containers/RoomContainer';

// import reducers
import reducers from 'reducers';

// create store
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

console.log(store);

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

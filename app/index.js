import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSocketMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import Main from 'components/Main';
import PromptContainer from 'containers/PromptContainer';
import RoomContainer from 'containers/RoomContainer';

import rootReducer from 'reducers';

// create store from reducers and middleware
let socket = io({path: '/api'});
let socketMiddleware = createSocketMiddleware(socket, 'api/');
let store = applyMiddleware(routerMiddleware(hashHistory),
            thunk, socketMiddleware)(createStore)(rootReducer);

console.info('State of store is:', store.getState());

// create an enhanced history that syncs navigation events with the store
let history = syncHistoryWithStore(hashHistory, store);

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

// render routes
ReactDOM.render(routes, document.getElementById('app'))

import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'; //use browserHistory in prod

// import components
import Main from 'components/Main';
import PromptContainer from 'containers/PromptContainer';
import RoomContainer from 'containers/RoomContainer';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PromptContainer} />
      <Route path='room/:id' component={RoomContainer} />
    </Route>
  </Router>
);

export default routes;
